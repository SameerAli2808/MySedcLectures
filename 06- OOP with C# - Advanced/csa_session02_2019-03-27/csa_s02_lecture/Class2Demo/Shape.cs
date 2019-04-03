namespace Class2Demo
{
    public abstract class Shape
    {
        public int Height { get; set; }
        public int Width { get; set; }
        public string Color { get; set; }

        public Shape()
        {

        }

        public Shape(int height, int width, string color)
        {
            this.Height = height;
            this.Width = width;
            this.Color = color;
        }

        public abstract void Draw();
        
    }
}