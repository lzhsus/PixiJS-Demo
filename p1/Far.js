/**
 * 制作一个专门的远层（FAR LAYER）显示对象
 * 
 * 
 */
function Far() {
    // 纹理
    var farTexture = PIXI.Texture.fromImage("resources/bg-far.png");
    PIXI.extras.TilingSprite.call(this, farTexture, 512, 256);
    // 定位
    this.position.x = 0;
    this.position.y = 0;
    this.tilePosition.x = 0; // 插入此行
    this.tilePosition.y = 0; // 插入此行
}
Far.prototype = Object.create(PIXI.extras.TilingSprite.prototype);
/**
 * 方法
 * 更新移动
 */
Far.prototype.update = function () {
    this.tilePosition.x -= 0.128;
};
// 测试分支 lzh001-1