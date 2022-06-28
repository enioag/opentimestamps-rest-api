import { PartialType } from '@nestjs/mapped-types';
import { CreateOtsDto } from './create-ots.dto';
import {OtsContainerDto} from "./ots-container.dto";
import {ApiProperty} from "@nestjs/swagger";

export class UpdateOtsDto extends PartialType(CreateOtsDto) {
    @ApiProperty({
        description: 'Array of ots objects containing ots files',
        example: [
            {
                "OtsFileBase64": "AE9wZW5UaW1lc3RhbXBzAABQcm9vZgC/ieLohOiSlAEIaZqq70oy8ypTolyq1Pcdjb93Q/Zvb0AcSrVaHLcOzB/wEC/ZfPGWGN/pOABS+wiA78YI8CBs6GnKyQtus8fy6t4UjXVcT/FGgD3Wn4b9+Q6Izli1awj/8BCM67dUvVl+aRPG0mWxud+yCPEEYrsBQPAIXdoD7k4JxNwAg9/jDS75DI4uLWh0dHBzOi8vYWxpY2UuYnRjLmNhbGVuZGFyLm9wZW50aW1lc3RhbXBzLm9yZ//wECQCZXgqCP/0sGdHhnAgAt4I8QRiuwE/8Ai2G+aKNyNpfACD3+MNLvkMjiwraHR0cHM6Ly9ib2IuYnRjLmNhbGVuZGFyLm9wZW50aW1lc3RhbXBzLm9yZ//wEEbdq3keQnLZHgyKEVekdDgI8QRiuwE/8Ag5udT0Sf0SVQCD3+MNLvkMjikoaHR0cHM6Ly9maW5uZXkuY2FsZW5kYXIuZXRlcm5pdHl3YWxsLmNvbfAQp8eiJC7tLV6RzOfVb1OwvAjxBGK7AUDwCMy+T5jYQvBwAIPf4w0u+QyOIyJodHRwczovL2J0Yy5jYWxlbmRhci5jYXRhbGxheHkuY29t",
                "Hash": "699aaaef4a32f32a53a25caad4f71d8dbf7743f66f6f401c4ab55a1cb70ecc1f"
            },
            {
                "OtsFileBase64": "AE9wZW5UaW1lc3RhbXBzAABQcm9vZgC/ieLohOiSlAEIhwqXenIiiTbz2lggOzOSQgzR8Y53vlGDA2yxuBEvFBPwEGzfMUHhqmaspED3doH2Aj0I8SB9f2dNiJQwSEGtGQGiQA8PLBPEk848bJcKlObixGXosQj/8BCM67dUvVl+aRPG0mWxud+yCPEEYrsBQPAIXdoD7k4JxNwAg9/jDS75DI4uLWh0dHBzOi8vYWxpY2UuYnRjLmNhbGVuZGFyLm9wZW50aW1lc3RhbXBzLm9yZ//wECQCZXgqCP/0sGdHhnAgAt4I8QRiuwE/8Ai2G+aKNyNpfACD3+MNLvkMjiwraHR0cHM6Ly9ib2IuYnRjLmNhbGVuZGFyLm9wZW50aW1lc3RhbXBzLm9yZ//wEEbdq3keQnLZHgyKEVekdDgI8QRiuwE/8Ag5udT0Sf0SVQCD3+MNLvkMjikoaHR0cHM6Ly9maW5uZXkuY2FsZW5kYXIuZXRlcm5pdHl3YWxsLmNvbfAQp8eiJC7tLV6RzOfVb1OwvAjxBGK7AUDwCMy+T5jYQvBwAIPf4w0u+QyOIyJodHRwczovL2J0Yy5jYWxlbmRhci5jYXRhbGxheHkuY29t",
                "Hash": "870a977a72228936f3da58203b3392420cd1f18e77be5183036cb1b8112f1413"
            },
            {
                "OtsFileBase64": "AE9wZW5UaW1lc3RhbXBzAABQcm9vZgC/ieLohOiSlAEIxHu9mTqg8iCdQKlGSzGQEApsMLupC1GNQewG1kXTeTLwEGPO5M+Aq3t47rn1UAZxU6EI//AQN2B+hd8sOrM24NXybyO7ngjwIBBwxKrDztR0s/GI1GNqhS+tFRbIQnItpHCGXMUqoSptCPEEYrnAgfAIH1kI5l8zpDsAg9/jDS75DI4uLWh0dHBzOi8vYWxpY2UuYnRjLmNhbGVuZGFyLm9wZW50aW1lc3RhbXBzLm9yZ//wEO7ON83QXvukpGbdJPncpEcI8CCpRj0oUD+IObN8lD5VjQLIKBoMi4htbhGD6t5n1lzO7wjxBGK5wIHwCMsM4lek2wBaAIPf4w0u+QyOLCtodHRwczovL2JvYi5idGMuY2FsZW5kYXIub3BlbnRpbWVzdGFtcHMub3Jn8BA6J1E/hnBCRzuS4OfrnKSRCPEgmOWno/yv0ZUy2xzfoLUCYSd632zj43nWG7qxC6r+o4QI8CB1ymiHgAKi98FYSTCrpsTJ1nJyudkLqYlsesec3DfEbgjxBGK5wIDwCO+J8uXGpTf6AIPf4w0u+QyOKShodHRwczovL2Zpbm5leS5jYWxlbmRhci5ldGVybml0eXdhbGwuY29t",
                "Hash": "c47bbd993aa0f2209d40a9464b3190100a6c30bba90b518d41ec06d645d37932"
            }
        ],
        isArray: true
    })
    OtsContainers: OtsContainerDto[];

}
