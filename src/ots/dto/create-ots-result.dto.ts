import {OtsContainerDto} from "./ots-container.dto";
import {ApiProperty} from "@nestjs/swagger";

export class CreateOtsResultDto {
    @ApiProperty({
        description: 'Array of ots objects containing ots files and human readable information about the timestamp',
        example: [
            {
                "OtsFileBase64": "AE9wZW5UaW1lc3RhbXBzAABQcm9vZgC/ieLohOiSlAEIaZqq70oy8ypTolyq1Pcdjb93Q/Zvb0AcSrVaHLcOzB/wEC/ZfPGWGN/pOABS+wiA78YI8CBs6GnKyQtus8fy6t4UjXVcT/FGgD3Wn4b9+Q6Izli1awj/8BCM67dUvVl+aRPG0mWxud+yCPEEYrsBQPAIXdoD7k4JxNwAg9/jDS75DI4uLWh0dHBzOi8vYWxpY2UuYnRjLmNhbGVuZGFyLm9wZW50aW1lc3RhbXBzLm9yZ//wECQCZXgqCP/0sGdHhnAgAt4I8QRiuwE/8Ai2G+aKNyNpfACD3+MNLvkMjiwraHR0cHM6Ly9ib2IuYnRjLmNhbGVuZGFyLm9wZW50aW1lc3RhbXBzLm9yZ//wEEbdq3keQnLZHgyKEVekdDgI8QRiuwE/8Ag5udT0Sf0SVQCD3+MNLvkMjikoaHR0cHM6Ly9maW5uZXkuY2FsZW5kYXIuZXRlcm5pdHl3YWxsLmNvbfAQp8eiJC7tLV6RzOfVb1OwvAjxBGK7AUDwCMy+T5jYQvBwAIPf4w0u+QyOIyJodHRwczovL2J0Yy5jYWxlbmRhci5jYXRhbGxheHkuY29t",
                "InfoResult": "File sha256 hash: 699aaaef4a32f32a53a25caad4f71d8dbf7743f66f6f401c4ab55a1cb70ecc1f\nTimestamp:\nappend 2fd97cf19618dfe9380052fb0880efc6\nsha256\nappend 6ce869cac90b6eb3c7f2eade148d755c4ff146803dd69f86fdf90e88ce58b56b\nsha256\n -> append 8cebb754bd597e6913c6d265b1b9dfb2\n    sha256\n    prepend 62bb0140\n    append 5dda03ee4e09c4dc\n    verify PendingAttestation('https://alice.btc.calendar.opentimestamps.org')\n -> append 240265782a08fff4b0674786702002de\n    sha256\n    prepend 62bb013f\n    append b61be68a3723697c\n    verify PendingAttestation('https://bob.btc.calendar.opentimestamps.org')\n -> append 46ddab791e4272d91e0c8a1157a47438\n    sha256\n    prepend 62bb013f\n    append 39b9d4f449fd1255\n    verify PendingAttestation('https://finney.calendar.eternitywall.com')\n -> append a7c7a2242eed2d5e91cce7d56f53b0bc\n    sha256\n    prepend 62bb0140\n    append ccbe4f98d842f070\n    verify PendingAttestation('https://btc.calendar.catallaxy.com')\n",
                "Hash": "699aaaef4a32f32a53a25caad4f71d8dbf7743f66f6f401c4ab55a1cb70ecc1f"
            },
            {
                "OtsFileBase64": "AE9wZW5UaW1lc3RhbXBzAABQcm9vZgC/ieLohOiSlAEIhwqXenIiiTbz2lggOzOSQgzR8Y53vlGDA2yxuBEvFBPwEGzfMUHhqmaspED3doH2Aj0I8SB9f2dNiJQwSEGtGQGiQA8PLBPEk848bJcKlObixGXosQj/8BCM67dUvVl+aRPG0mWxud+yCPEEYrsBQPAIXdoD7k4JxNwAg9/jDS75DI4uLWh0dHBzOi8vYWxpY2UuYnRjLmNhbGVuZGFyLm9wZW50aW1lc3RhbXBzLm9yZ//wECQCZXgqCP/0sGdHhnAgAt4I8QRiuwE/8Ai2G+aKNyNpfACD3+MNLvkMjiwraHR0cHM6Ly9ib2IuYnRjLmNhbGVuZGFyLm9wZW50aW1lc3RhbXBzLm9yZ//wEEbdq3keQnLZHgyKEVekdDgI8QRiuwE/8Ag5udT0Sf0SVQCD3+MNLvkMjikoaHR0cHM6Ly9maW5uZXkuY2FsZW5kYXIuZXRlcm5pdHl3YWxsLmNvbfAQp8eiJC7tLV6RzOfVb1OwvAjxBGK7AUDwCMy+T5jYQvBwAIPf4w0u+QyOIyJodHRwczovL2J0Yy5jYWxlbmRhci5jYXRhbGxheHkuY29t",
                "InfoResult": "File sha256 hash: 870a977a72228936f3da58203b3392420cd1f18e77be5183036cb1b8112f1413\nTimestamp:\nappend 6cdf3141e1aa66aca440f77681f6023d\nsha256\nprepend 7d7f674d8894304841ad1901a2400f0f2c13c493ce3c6c970a94e6e2c465e8b1\nsha256\n -> append 8cebb754bd597e6913c6d265b1b9dfb2\n    sha256\n    prepend 62bb0140\n    append 5dda03ee4e09c4dc\n    verify PendingAttestation('https://alice.btc.calendar.opentimestamps.org')\n -> append 240265782a08fff4b0674786702002de\n    sha256\n    prepend 62bb013f\n    append b61be68a3723697c\n    verify PendingAttestation('https://bob.btc.calendar.opentimestamps.org')\n -> append 46ddab791e4272d91e0c8a1157a47438\n    sha256\n    prepend 62bb013f\n    append 39b9d4f449fd1255\n    verify PendingAttestation('https://finney.calendar.eternitywall.com')\n -> append a7c7a2242eed2d5e91cce7d56f53b0bc\n    sha256\n    prepend 62bb0140\n    append ccbe4f98d842f070\n    verify PendingAttestation('https://btc.calendar.catallaxy.com')\n",
                "Hash": "870a977a72228936f3da58203b3392420cd1f18e77be5183036cb1b8112f1413"
            }
        ],
        isArray: true
    })
    OtsContainers: OtsContainerDto[];
}
