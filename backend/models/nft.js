const Sequelize = require("sequelize");

// User 클래스에서 시퀄라이즈 모듈객체의 기능을 상속시켜주기위해
// User 클래스에서 Sequelize.Model 기능을 준다.

class Nft extends Sequelize.Model {
  // static init 매서드에서 테이블을 생성해준다.
  // 사용하면 테이블을 생성 및 연결까지(매핑까지) 구성
  static init(sequelize) {
    // 상속받은 함수를 쓰려면
    // super 사용
    // 컬럼이 뭐뭐 이쓴ㄴ지 그 타입과 속성이 뭔지
    // 여기에 정리해서 테이블을 생성해주고 매핑(연결)해줌.

    // 두번째 테이블 자체에 대한 설정값을 객체로 전달
    return super.init(
      {
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          primaryKey: true,
          unique: true,
          autoIncrement: true,
        },
        nft_id: {
          type: Sequelize.CHAR(36),
          allowNull: false,
          unique: true,
        },
        title: {
          type: Sequelize.STRING(255),
          allowNull: false,
        },
        description: {
          type: Sequelize.TEXT,
        },
        img_url: {
          type: Sequelize.STRING(255),
          allowNull: false,
        },

        history: {
          type: Sequelize.TEXT,
        },
        
      },
      //created_at 만 생기는게 아니라 updated_at 도 생겨서 우리가 수정했을때 시간도 같이 기록해줌
      {
        sequelize,
        timestamps: true,
        // underscored 시퀄라이즈는 기본적으로 userData 카멜표기법인데
        // 스테이크 표기법으로 바꿔주는 옵션 user_data
        underscored: true, // false : createdAt , true : created_at
        // 모델의 이름을 설정할 수 있다.
        modelName: "Nft", // 관계형으로 구성할 때 사용한다.
        tableName: "nfts", // 데이터베이스의 테이블 이름을 설정한다.

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
//     db.Nft.belongsTo(db.User, { foreignKey: "owner", targetKey: "uid" });
//   }
}

module.exports = Nft;
