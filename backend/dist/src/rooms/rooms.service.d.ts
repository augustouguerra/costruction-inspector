import { PrismaService } from '../prisma/prisma.service';
import { CreateRoomDto } from './dto/create-room.dto';
export declare class RoomsService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(apartmentId: string): import(".prisma/client").Prisma.PrismaPromise<{
        id: string;
        createdAt: Date;
        name: string;
        apartmentId: string;
    }[]>;
    create(apartmentId: string, dto: CreateRoomDto): import(".prisma/client").Prisma.Prisma__RoomClient<{
        id: string;
        createdAt: Date;
        name: string;
        apartmentId: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(roomId: string): import(".prisma/client").Prisma.Prisma__RoomClient<{
        id: string;
        createdAt: Date;
        name: string;
        apartmentId: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
