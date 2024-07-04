
import { Sequelize } from "sequelize";
import { configDotenv } from "dotenv";

const sequelize = configDotenv().parsed.DB_URL
    ? new Sequelize(configDotenv().parsed.DB_URL)
    : new Sequelize(process.env.DB_NAME, configDotenv().parsed.DB_USER, configDotenv().parsed.DB_PASSWORD, {
        host: 'localhost',
        dialect: 'postgres',
        dialectOptions: {
            decimalNumbers: true,
        },
    });

export default sequelize;