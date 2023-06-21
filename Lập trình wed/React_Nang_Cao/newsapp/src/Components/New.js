import React, { Component } from 'react'
import Newitem from './Newitem'
import Loader from './Loader';
import PropTypes from 'prop-types'


// PropTypes (Kiểu dữ liệu chho props) 
// => là 1 thuộc tính của component được sử dụng để xác định kiểu dữ liệu của props
export class New extends Component {
  static defaultProps = { // Gía trị mặc định cho props tĩnh (Đoạn code này khai báo các giá trị mặc đinh cho các props của component)
    country: "in",  // Trong trường hợp khong chuyển dữ liệu cho các props thì đây là giá trị mặc định
    pageSize: 8,
    category: "general",  
  }
  static propTypes = { // Truyền kiểu dữ liệu cho props tĩnh
    country: PropTypes.string,  // Bằng cách này ta có thể cung cấp kiểu dữ liệu mà mình mong muốn
    pageSize: PropTypes.number,
    category: PropTypes.string,
  }
  constructor(props) { 
    super(props); // Trong ví dụ này, state trong React được sử dụng để lưu trữ các thông tin quan trọng và thay đổi trong component New. 
    //Trong constructor của component, state được khởi tạo bằng cách gọi phương thức super() 
    // console.log("Xin chao ban den voi newitem");
    this.state = { // Thuộc tính state được truy cập theo cú pháp this.state.<tên thuộc tính> 
      articles: [],
      loading: false,
      page: 1
    } // Hiểu rằng State giúp chung ta như là nơi lưu trữ và khởi tạo thuộc tính
    document.title = `${this.clickUpplowerCase(this.props.category)} - News Heading`;
  }
  async updateNew() {
    // Là một phương thức được gọi sau khi component đã được hiển thị lần đầu tiên
    // Nó được sử dụng để thực hiện các tác uuj khởi tạo hoặc tải dự liệu từ các nguồn bên ngoài API
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=8cf4829b619f46c58eb81392a762eabf&page=${this.state.page }&pageSize=${this.props.pageSize}`;
    
    this.setState({ loading: true }) // Cập  nhật trạng thái loading thành true => hiện loader (Loader.js)
    let data = await fetch(url);
    // Tiếp theo, fetch(url) được sử dụng để gửi yêu cầu HTTP GET đến URL được xây dựng. 
    // Hàm fetch trả về một promise, do đó, await được sử dụng để đợi kết quả của yêu cầu được trả về
    let parentData = await data.json();
     this.setState({ articles: parentData.articles, totalResults: parentData.totalResults, loading: false })
    // Với componentDidMount dữ liệu từ API được tải và lưu trong state ban đầu của component khi component được hiển thị lần đầu tiên trên giao diện người dùng.
  }
  async componentDidMount() {
     this.updateNew();
  }
  clickUpplowerCase = (string) => {
    return  string.charAt(0).toUpperCase() + string.slice(1);
  }
  backClickPage = async () => {
    console.log("next");
     this.setState({
      page: this.state.page - 1
    })
    await this.updateNew();

  }
  nextClickPage = async () => {
    console.log("next");
    this.setState({
      page: this.state.page + 1
    })
    await this.updateNew();
  }
  render() {
    return (
      <div className='container my-4 position-relative' style={{ height: '100vh' }}>
        <h1 className='text-center my-4'>Tin Tức Mới Nhất Về -  {this.clickUpplowerCase(this.props.category)}</h1>
        {this.state.loading && <Loader />}
        <div className='row ' style={{}}>
          {!this.state.loading && this.state.articles.map((element) => {
            return <div className='col-md-4 my-4' key={element.url}>
              <Newitem title={element.title.length >= 50 ? element.title.slice(0, 40) + "..." : element.title}
                blogContent={element.description ? element.description.slice(0, 30) + "..." : element.description}
                imageUlr={element.urlToImage} newULR={element.url}
                author={element.author} date={element.publishedAt} source={element.source.name} />
            </div>
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button className='btn btn-dark' disabled={this.state.page <= 1} onClick={this.backClickPage}>&larr; Back</button>
          <button className={`btn btn-dark`} disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} onClick={this.nextClickPage}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default New





// Một component trong React có thể bao gồm các thành phần UI như các thẻ HTML, CSS và các logic xử lý sự kiện, xử lý dữ liệu, và trạng thái của ứng dụng



// Một số phương thức quan trọng của đối tượng Response bao gồm:

// json(): Chuyển đổi nội dung của phản hồi từ định dạng JSON sang đối tượng JavaScript.
// text(): Trả về nội dung của phản hồi dưới dạng chuỗi văn bản.
// blob(): Trả về nội dung của phản hồi dưới dạng đối tượng Blob (Binary Large Object).
// arrayBuffer(): Trả về nội dung của phản hồi dưới dạng ArrayBuffer.
// formData(): Chuyển đổi nội dung của phản hồi thành một đối tượng FormData.
// Các phương thức này cho phép bạn truy cập và sử dụng dữ liệu từ phản hồi của yêu cầu HTTP, tuỳ thuộc vào định dạng dữ liệu mà bạn cần làm việc.


// ---------------React Component Lifecycle & Lifecycle methods------------------

// Trong mỗi component có  một chu kì sống (vòng đời - lifecycle) của riêng nó.
// Chu kỳ sống này bao gồm các phương thức mà bạn có thể ghi đè để thực hiện các hành động cụ thể tại các điểm khác nhau trong quá trình sống của thành phần 
// (* 1 - Mounting (Gắn kết))

// constructor(): Được gọi khi một thành phần được khởi tạo. Đây là nơi bạn khởi tạo các state ban đầu và gán các phương thức thành phần. 
// Đây là phương thức đầu tiên được gọi trong chu kỳ sống.
// static getDerivedStateFromProps(): Được gọi trước render khi một thành phần được gắn kết. Nó cho phép bạn cập nhật state dựa trên props mới nhận được. 
// Phương thức này thường ít được sử dụng.
// render(): Phương thức này trả về JSX (đại diện cho UI của thành phần) để hiển thị trên giao diện người dùng.
// componentDidMount(): Được gọi sau khi thành phần đã được gắn kết vào cây DOM. 
// Đây là nơi bạn thực hiện các tác vụ cần thiết sau khi thành phần đã xuất hiện trên giao diện người dùng, chẳng hạn như gọi API hoặc cập nhật state.