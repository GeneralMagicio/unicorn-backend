import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {
  private readonly logger = new Logger(UsersService.name);
  constructor(private prismaService: PrismaService) {}

  // create = async ({
  //   address,
  //   isBadgeHolder,
  // }: {
  //   address: string;
  //   isBadgeHolder: boolean;
  // }): Promise<User | null> => {
  //   return this.prismaService.user.create({
  //     data: { address, isBadgeHolder: isBadgeHolder ? 1 : 0 },
  //   });
  // };
}
