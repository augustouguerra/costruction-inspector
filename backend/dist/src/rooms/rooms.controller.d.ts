import { RoomsService } from './rooms.service';
import { CreateRoomDto } from './dto/create-room.dto';
export declare class RoomsController {
    private roomsService;
    constructor(roomsService: RoomsService);
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
    remove(id: string): import(".prisma/client").Prisma.Prisma__RoomClient<{
        id: string;
        createdAt: Date;
        name: string;
        apartmentId: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
