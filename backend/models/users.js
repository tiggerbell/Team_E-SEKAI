const Sequelize = require("sequelize");


class User extends Sequelize.Model {

  static init(sequelize) {
    return super.init(
      {
        id: {

          type: Sequelize.INTEGER,
          allowNull: false,
          primaryKey: true,
          unique: true,
          autoIncrement: true,
        },
        uid: {
          type: Sequelize.CHAR(29),
          allowNull: false,
          unique: true,
        },
        pwd: {
          type: Sequelize.STRING(255),
          allowNull: false,
        },
        name: {
          type: Sequelize.STRING(255),
        },
        email: {
          type: Sequelize.STRING(50),
          allowNull: false,
        },
        grade: {
          type: Sequelize.TINYINT,
        },
        gallery: {
          type: Sequelize.TEXT,
        },
        state: {
          type: Sequelize.TINYINT,
        },
        img_url: {
          type: Sequelize.STRING(255),
        },
        // 생성한 시간이 필요하다 할때 사용하면 됨 테이블 자체에 timestamps : true 도 쓸수 있음.
        // created_at: {
        //   type: Sequelize.DATE,
        //   allowNull: false,
        //   defaultValue: Sequelize.NOW,
        // },
      },
      //created_at 만 생기는게 아니라 updated_at 도 생겨서 우리가 수정했을때 시간도 같이 기록해줌
      {
        sequelize,
        timestamps: true,

        underscored: false, // false : createdAt , true : created_at
        // 모델의 이름을 설정할 수 있다.
        modelName: "User", // 관계형으로 구성할 때 사용한다.
        tableName: "users", // 데이터베이스의 테이블 이름을 설정한다.

        // 삭제했을때 삭제하는 대신 deletedAt 이 추가가 되고 숨긴다.
        paranoid: false,

        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
      }
    );
  }
  // 1:N (foreignKey) 외래키
//   static associate(db) {
//     // 1:N 관계 (hasMany, belongsTo)
//     // 시퀄라이즈에서 1:N 관계를 hasMany 함수로 정의한다.
//     // hasMany 함수를 이용해서 테이블의 관계를 정의해준다.
//     // 첫번째 매개변수로 연결할 테이블
//     //sourceKey User 테이블 안에 무슨 키를 foreignKey와 연결할지
//     // hasMany (첫번째로 넘겨준 테이블이 foreignKey 연결되고 )
//     // db.User.hasMany(db.Rank, { foreignKey: "user_uid", sourceKey: "uid" });
//     db.User.hasMany(db.Nft, { foreignKey: "owner", sourceKey: "uid" });
//     db.User.hasMany(db.Report, { foreignKey: "user_uid", sourceKey: "uid" });
//   }
}

module.exports = User;
