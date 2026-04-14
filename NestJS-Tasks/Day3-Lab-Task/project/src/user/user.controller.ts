import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
  UseGuards,
  UseInterceptors,
  UseFilters,
  HttpException,
  HttpStatus,
  UploadedFile,
} from '@nestjs/common';
import { UserService } from './user.service';
import { RoleGuard } from '../common/guard/role.gaurd';
import { AuthGuard } from '../common/guard/auth.guard';
import { Roles } from '../common/decorator/roles.decorator';
import { ResponseInterceptor } from '../common/interceptor/response.interceptor';
import { ErrorFilter } from '../common/filter/http-exception.filter';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { existsSync, mkdirSync } from 'fs';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

const uploadPath = './uploads';

if (!existsSync(uploadPath)) {
  mkdirSync(uploadPath, { recursive: true });
}

@Controller('user')
@UseGuards(AuthGuard, RoleGuard)
@Roles('admin')
@UseInterceptors(ResponseInterceptor)
@UseFilters(ErrorFilter)
export class UserController {
  constructor(private readonly userService: UserService) {}

  // Create
  @Post()
  create(@Body() newUser: CreateUserDto) {
    return this.userService.create(newUser);
  }

  // Read
  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  // Filter errors
  @Get('error')
  getError() {
    throw new HttpException('User error', HttpStatus.BAD_REQUEST);
  }

  // Update
  @Patch(':id')
  update(@Param('id') id: string, @Body() updatedData: UpdateUserDto) {
    return this.userService.update(+id, updatedData);
  }

  // Delete
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }

  // Upload image
  @Post(':id/upload-image')
  @UseInterceptors(
    FileInterceptor('image', {
      storage: diskStorage({
        destination: uploadPath,
        filename: (req, file, cb) => {
          const uniqueName = Date.now() + '-' + Math.round(Math.random() * 1e9);
          cb(null, `user-${uniqueName}${extname(file.originalname)}`);
        },
      }),
      fileFilter: (req, file, cb) => {
        if (!file.mimetype.match(/\/(jpg|jpeg|png|gif|webp)$/)) {
          return cb(
            new HttpException(
              'Only image files are allowed!',
              HttpStatus.BAD_REQUEST,
            ),
            false,
          );
        }
        cb(null, true);
      },
      limits: {
        fileSize: 5 * 1024 * 1024,
      },
    }),
  )
  uploadImage(
    @Param('id') id: string,
    @UploadedFile() file: Express.Multer.File,
  ) {
    if (!file) {
      throw new HttpException('No image uploaded', HttpStatus.BAD_REQUEST);
    }

    const imagePath = `/uploads/${file.filename}`;

    this.userService.update(+id, { image: imagePath });

    return {
      message: 'Image uploaded successfully',
      image: imagePath,
      userId: +id,
    };
  }

  // Get user image
  @Get(':id/image')
  getUserImage(@Param('id') id: string) {
    const user = this.userService.findOne(+id);

    if (!user || !user.image) {
      throw new HttpException('Image not found', HttpStatus.NOT_FOUND);
    }

    return {
      userId: +id,
      image: user.image,
    };
  }
}
