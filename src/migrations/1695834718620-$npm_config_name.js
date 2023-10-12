"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$npmConfigName1695834718620 = void 0;
const typeorm_1 = require("typeorm");
class $npmConfigName1695834718620 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: 'ticketbook',
            columns: [
                {
                    name: 'id',
                    type: 'int',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name: 'movie',
                    type: 'int',
                },
                {
                    name: 'userID',
                    type: 'text',
                },
                {
                    name: 'createdAt',
                    type: 'timestamp',
                    default: 'CURRENT_TIMESTAMP',
                },
                {
                    name: 'updatedAt',
                    type: 'timestamp',
                    default: 'CURRENT_TIMESTAMP',
                    onUpdate: 'CURRENT_TIMESTAMP',
                },
            ],
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable('ticketbook');
    }
}
exports.$npmConfigName1695834718620 = $npmConfigName1695834718620;
//# sourceMappingURL=1695834718620-$npm_config_name.js.map