import React, { useRef, useEffect, useState } from 'react';
const HOOK_SVG =  'm129.03125 63.3125c0-34.914062-28.941406-63.3125-64.519531-63.3125-35.574219 0-64.511719 28.398438-64.511719 63.3125 0 29.488281 20.671875 54.246094 48.511719 61.261719v162.898437c0 53.222656 44.222656 96.527344 98.585937 96.527344h10.316406c54.363282 0 98.585938-43.304688 98.585938-96.527344v-95.640625c0-7.070312-4.640625-13.304687-11.414062-15.328125-6.769532-2.015625-14.082032.625-17.960938 6.535156l-42.328125 64.425782c-4.847656 7.390625-2.800781 17.3125 4.582031 22.167968 7.386719 4.832032 17.304688 2.792969 22.160156-4.585937l12.960938-19.71875v42.144531c0 35.582032-29.863281 64.527344-66.585938 64.527344h-10.316406c-36.714844 0-66.585937-28.945312-66.585937-64.527344v-162.898437c27.847656-7.015625 48.519531-31.773438 48.519531-61.261719zm-97.03125 0c0-17.265625 14.585938-31.3125 32.511719-31.3125 17.929687 0 32.511719 14.046875 32.511719 31.3125 0 17.261719-14.582032 31.3125-32.511719 31.3125-17.925781 0-32.511719-14.050781-32.511719-31.3125zm0 0'
const HOOK_PATH = new Path2D(HOOK_SVG);
const SCALE = 0.1;
interface location {
  x: number,
  y: number
}
export default function Home() {
  const [locations, setLocations] = useState<location[]>([]);
  const canvasRef = useRef(null);
  // function drawHeart(ctx: CanvasRenderingContext2D, x: number, y: number, R: number, rot: number) {
  //   ctx.save();
  //   ctx.translate(x, y);
  //   ctx.rotate(rot / 180 * Math.PI);
  //   ctx.scale(R, R);
  //   heartPath(ctx);
  //   ctx.strokeStyle = "red";
  //   ctx.lineWidth = 3;
  //   ctx.shadowColor = "gray";
  //   ctx.shadowOffsetX = 5;
  //   ctx.shadowOffsetY = 5;
  //   ctx.shadowBlur = 5;
  //   ctx.fill();
  //   // ctx.stroke();
  //   ctx.restore();
  // }
  // function heartPath(ctx: CanvasRenderingContext2D) {
  //   ctx.beginPath();
  //   ctx.arc(-1, 0, 1, Math.PI, 0, false);
  //   ctx.arc(1, 0, 1, Math.PI, 0, false);
  //   //貝塞尔曲线画心
  //   ctx.bezierCurveTo(1.9, 1.2, 0.6, 1.6, 0, 3.0);
  //   ctx.bezierCurveTo(-0.6, 1.6, -1.9, 1.2, -2, 0);
  //   ctx.closePath();
  // }

  function draw(ctx: CanvasRenderingContext2D, location: location, offsetTop: number, offsetLeft: number) {
    ctx.fillStyle = 'deepskyblue'
    ctx.shadowColor = 'dodgerblue'
    ctx.shadowBlur = 20
    ctx.save()
    ctx.scale(SCALE, SCALE)
    ctx.translate((location.x - offsetLeft) / SCALE, (location.y - offsetTop) / SCALE)
    ctx.fill(HOOK_PATH)
    ctx.restore()
  }
  useEffect(() => {
    console.log(canvasRef);
    const canvas: HTMLCanvasElement = canvasRef.current!;
    const ctx: CanvasRenderingContext2D = canvas.getContext('2d')!;
    // drawHeart(ctx, 400, 400, 40, 20);
    // @todo 优化增量修改
    ctx.clearRect(0, 0, window.innerHeight, window.innerWidth)
    locations.forEach(location => draw(ctx, location, canvas.offsetTop, canvas.offsetLeft))
  })
  return (
    <div>
      <canvas
        ref={canvasRef}
        width={600}
        height={600}
        style={{ border: '1px solid #aaa', display: 'block', margin: '50px auto' }}
        onMouseMove={e => {
          const newLocations = [...locations, { x: e.clientX, y: e.clientY }];
          setLocations(newLocations)
        }}
      />
    </div>
  )
}