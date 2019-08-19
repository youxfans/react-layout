import React, { useRef, useEffect, useState } from 'react';

export default function Home() {
  const canvasRef = useRef(null);

  let isDraw = false;

  function handleMosueDown(event: React.MouseEvent) {
    const canvas: HTMLCanvasElement = canvasRef.current!;
    const ctx: CanvasRenderingContext2D = canvas.getContext('2d')!;
    const x = event.clientX - canvas.getBoundingClientRect().left;
    const y = event.clientY - canvas.getBoundingClientRect().top;

    let oldPoint = {
      x: x - 1,
      y: y - 1
    }

    //绑定移动和抬起事件
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseup", up);

    function up() {
      window.removeEventListener("mousemove", move);
    }

    function move(event: { clientX: number; clientY: number; }) {
      const x = event.clientX - canvas.getBoundingClientRect().left;
      const y = event.clientY - canvas.getBoundingClientRect().top;

      draw(x, y);
      oldPoint = {
        x: x,
        y: y
      }

    }

    //画的方法
    function draw(x: number, y: number) {
      ctx.beginPath();

      //线的宽度
      ctx.lineWidth = 5;

      //线的样式
      ctx.lineCap = "round";
      ctx.moveTo(x, y);
      ctx.lineTo(oldPoint.x, oldPoint.y);
      ctx.stroke();
      ctx.closePath();
    }
  }
  return (
    <div>
      <canvas
        ref={canvasRef}
        width={600}
        height={600}
        style={{ border: '1px solid #aaa', display: 'block', margin: '50px auto' }}
        onMouseDown={handleMosueDown}
      />
    </div>
  )
}