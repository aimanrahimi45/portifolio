declare module 'ogl' {
  export interface RendererOptions {
    canvas?: HTMLCanvasElement;
    width?: number;
    height?: number;
    dpr?: number;
    alpha?: boolean;
    depth?: boolean;
    stencil?: boolean;
    antialias?: boolean;
    premultipliedAlpha?: boolean;
    preserveDrawingBuffer?: boolean;
    powerPreference?: 'default' | 'high-performance' | 'low-power';
    autoClear?: boolean;
    webgl?: number;
  }

  export interface UniformValue {
    value: unknown;
  }

  export interface Uniforms {
    [key: string]: UniformValue;
  }

  export interface ProgramOptions {
    vertex: string;
    fragment: string;
    uniforms?: Uniforms;
  }

  export interface MeshOptions {
    geometry: Geometry;
    program: Program;
  }

  export interface RenderOptions {
    scene: Mesh;
  }

  export class Renderer {
    gl: WebGL2RenderingContext;
    canvas: HTMLCanvasElement;
    
    constructor(options?: RendererOptions);
    
    setSize(width: number, height: number, updateStyle?: boolean): void;
    render(options: RenderOptions): void;
  }

  export class Program {
    uniforms: Uniforms;
    
    constructor(gl: WebGL2RenderingContext, options: ProgramOptions);
  }

  export class Mesh {
    constructor(gl: WebGL2RenderingContext, options: MeshOptions);
  }

  export class Triangle extends Geometry {
    constructor(gl: WebGL2RenderingContext);
  }

  export interface GeometryAttributes {
    [key: string]: unknown;
  }

  export class Geometry {
    attributes: GeometryAttributes;
    constructor(gl: WebGL2RenderingContext, attributes?: GeometryAttributes);
  }

  export class Color {
    r: number;
    g: number;
    b: number;
    
    constructor(color: string | number | number[]);
  }
}