import React, { Component } from 'react';
import Newitem from './Newitem';
import Loader from './Loader';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';
// InfiniteScroll giúp triển khai tính năng cuộn vô hạn 
// Nó cho phép tải dữ liệu tưng phần khi người dùng cuộn đến cuối trang mà không cần phải tải lại trang hay tạo trang mới

export class New extends Component {
  static defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general',
  };

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
      articles: [], // Mảng chứa các tin tức được tải trước đó
      loading: false,
      page: 1,
      totalResults: 0,
    } // Hiểu rằng State giúp chung ta như là nơi lưu trữ và khởi tạo thuộc tính
    document.title = `${this.clickUpplowerCase(this.props.category)} - News Heading`;
  }
  async updateNew() {
    // Là một phương thức được gọi sau khi component đã được hiển thị lần đầu tiên
    // Nó được sử dụng để thực hiện các tác uuj khởi tạo hoặc tải dự liệu từ các nguồn bên ngoài API
    this.props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=12c6f4f8c006432a807fcedec1165904&page=${this.state.page}&pageSize=${this.props.pageSize}`;

    this.setState({ loading: true }) // Cập  nhật trạng thái loading thành true => hiện loader (Loader.js)
    let data = await fetch(url);
    this.props.setProgress(30);
    // Tiếp theo, fetch(url) được sử dụng để gửi yêu cầu HTTP GET đến URL được xây dựng. 
    // Hàm fetch trả về một promise, do đó, await được sử dụng để đợi kết quả của yêu cầu được trả về
    let parentData = await data.json();
    this.props.setProgress(90);

    this.setState({
      articles: parentData.articles, // Mảng được chứa các tin tức mới nhất từ API
      totalResults: parentData.totalResults,
      loading: false
    })
    this.props.setProgress(100);
    // Với componentDidMount dữ liệu từ API được tải và lưu trong state ban đầu của component khi component được hiển thị lần đầu tiên trên giao diện người dùng.
  }
  async componentDidMount() {
    this.updateNew();
  }
  clickUpplowerCase = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
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

  fetchMoreData = async () => { // Hàm này được gọi khi muốn tải thêm dữ liệu tin tức, ví dụ khi người dùng scroll đến cuối trang.s
    // Trước khi gửi yêu cầu tải dữ liệu, trạng thái page được tăng lên để chỉ định trang tiếp theo cần tải.
    // Gọi hàm này khi muốn tải thêm dữ liệu (ví dụ: khi scroll đến cuối trang)
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=12c6f4f8c006432a807fcedec1165904&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    this.setState({ page: this.state.page + 1 })
    this.setState({ loading: true })
    let data = await fetch(url);
    let parentData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parentData.articles), //  kết hợp (concatenate) mảng articles hiện tại với mảng articles mới từ dữ liệu API (parentData.articles).
      totalResults: parentData.totalResults,
      loading: false
    });
  };
  //   Nguyên tắc hoạt động của đoạn mã này là:

  // Khi component New được hiển thị lần đầu tiên, phương thức componentDidMount được gọi để tải dữ liệu tin tức từ API bằng cách gọi updateNew.
  // Dữ liệu tin tức được lưu trong state articles và totalResults.
  // Khi người dùng cuộn đến cuối trang, phương thức fetchMoreData được gọi để tải thêm dữ liệu tin tức.
  // Danh sách tin tức được hiển thị trong InfiniteScroll và mỗi tin tức được hiển thị bằng một component Newitem.
  // Người dùng có thể điều hướng giữa các trang tin tức bằng cách nhấp vào các nút phân trang.
  render() { // Trả về HTML và các thành phần react
    //  JSX là một phần mở rộng của JavaScript cho phép bạn viết mã HTML tương tự như HTML thực sự trong JavaScript
    return (
      <div className="container position-relative" style={{ height: '100vh', marginTop: '90px' }}>
        <h1 className="text-center my-4">Tin Tức Mới Nhất Về - {this.clickUpplowerCase(this.props.category)}</h1>
        {this.state.loading && <Loader />}
        <InfiniteScroll   // là một thành phần từ thư viện react-infinite-scroll-component, giúp thực hiện tải thêm dữ liệu khi scroll đến cuối trang.
          dataLength={this.state.articles.length} // Thuộc tính dataLength được đặt bằng độ dài của danh sách articles trong state, để xác định kích thước hiện tại của danh sách dữ liệu.
          next={this.fetchMoreData} // Thuộc tính next được thiết lập là hàm fetchMoreData, tức là khi scroll đến cuối trang, fetchMoreData sẽ được gọi để tải thêm dữ liệu.
          hasMore={this.state.articles.length !== this.state.totalResults} // Thuộc tính hasMore xác định xem còn dữ liệu tin tức chưa được tải hết hay không, dựa trên số lượng bài báo hiện tại và tổng số kết quả
        >
          <div className="container" style={{ height: '100%', overflowY: '100%' }}>
            <div className="row">
              {!this.state.loading &&
                this.state.articles.map((element) => {
                  return (
                    <div className="col-md-4 my-4" key={element.url}>
                      <Newitem
                        title={element.title.length >= 50 ? element.title.slice(0, 40) + '...' : element.title}
                        blogContent={element.description ? element.description.slice(0, 30) + '...' : element.description}
                        imageUlr={element.urlToImage}
                        newULR={element.url}
                        author={element.author}
                        date={element.publishedAt}
                        source={element.source.name}
                      />
                    </div>
                  );
                })}
            </div>
          </div>
        </InfiniteScroll>
        <div className="container d-flex justify-content-between">
          <button className='btn btn-dark' disabled={this.state.page <= 1} onClick={this.backClickPage}>&larr; Back</button>
          <button className={`btn btn-dark`} disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} onClick={this.nextClickPage}>Next &rarr;</button>
        </div>
      </div>
    );
  }
}

export default New;

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










// Module react-infinite-scroll-component giúp triển khai tính năng cuộn vô hạn trong ứng dụng React. Nó cho phép tải dữ liệu theo từng phần khi người dùng cuộn đến cuối trang, mà không cần tải lại hoặc chuyển sang trang mới.

// Các lợi ích của việc sử dụng InfiniteScroll:

// Cuộn vô hạn: Khi người dùng cuộn đến cuối trang, InfiniteScroll tự động gọi một hàm xử lý (như fetchMoreData trong đoạn mã trên) để tải thêm dữ liệu. Điều này cho phép hiển thị danh sách dữ liệu lớn mà không cần tải toàn bộ danh sách cùng một lúc, giúp cải thiện hiệu suất và tăng trải nghiệm người dùng.

// Tự động xác định khi cuộn đến cuối trang: InfiniteScroll tự động xác định khi người dùng cuộn đến cuối trang dựa trên kích thước và vị trí của phần tử chứa danh sách dữ liệu. Điều này loại bỏ nhu cầu theo dõi và xử lý các sự kiện cuộn thủ công.

// Kiểm soát tải dữ liệu: InfiniteScroll cung cấp các thuộc tính như dataLength (độ dài danh sách dữ liệu hiện tại) và hasMore (xác định xem còn dữ liệu để tải hay không) để quản lý việc tải dữ liệu. Bằng cách sử dụng các thuộc tính này, bạn có thể kiểm soát việc gọi hàm xử lý tải dữ liệu và xác định khi dừng tải dữ liệu mới.

// Dễ tích hợp: InfiniteScroll dễ dàng tích hợp vào các ứng dụng React hiện có và cho phép tùy chỉnh linh hoạt thông qua các thuộc tính và sự kiện được cung cấp.

// Với việc sử dụng InfiniteScroll, bạn có thể tạo ra trang web hoặc ứng dụng có khả năng cuộn vô hạn và tải dữ liệu một cách linh hoạt, giúp cải thiện trải nghiệm người dùng và hiệu suất của ứng dụng.