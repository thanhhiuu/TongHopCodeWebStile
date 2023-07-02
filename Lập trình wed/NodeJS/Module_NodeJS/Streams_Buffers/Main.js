

const buffer = Buffer.alloc(10, "dnakjsdhakjsdhaskj"); // Cú pháp : Buffer.alloc(size[, fill[, encoding]])
console.log(buffer.toString()); // Biến đổi thành chuõi và in ra
console.log(buffer.toJSON()); // Xuat ra với kiểu json
console.log(buffer); // Xuat hiẹn với dãy số Hex (16)








/**
 * Dưới đây là một số thuộc tính và phương thức bổ trợ quan trọng của Streams và Buffers trong Node.js:

--------------------------Streams:

        readable: Thuộc tính chỉ định xem một stream có thể đọc hay không.

        writable: Thuộc tính chỉ định xem một stream có thể ghi hay không.

        pipe(destination[, options]): Phương thức chuyển dữ liệu từ một stream sang stream khác.

        on('data', callback): Sự kiện xảy ra khi dữ liệu mới được đọc từ một stream đọc.

        on('end', callback): Sự kiện xảy ra khi không còn dữ liệu để đọc từ một stream đọc.

        on('error', callback): Sự kiện xảy ra khi có lỗi xảy ra trong quá trình xử lý stream.

        pause(): Phương thức dừng việc đọc hoặc ghi dữ liệu từ một stream.

        resume(): Phương thức tiếp tục việc đọc hoặc ghi dữ liệu từ một stream.

        destroy([error]): Phương thức hủy một stream và kết thúc việc xử lý.

        ----------------------------Buffers:

        length: Thuộc tính chỉ định kích thước của buffer.

        toString([encoding[, start[, end]]]): Phương thức chuyển đổi buffer sang một chuỗi sử dụng encoding cụ thể.

        write(string[, offset[, length]][, encoding]): Phương thức ghi dữ liệu từ một chuỗi vào buffer.

        slice([start[, end]]): Phương thức tạo ra một buffer mới chứa một phần của buffer ban đầu.

        copy(target[, targetStart[, sourceStart[, sourceEnd]]]): Phương thức sao chép dữ liệu từ buffer này sang buffer khác.

        fill(value[, offset[, end]][, encoding]): Phương thức điền giá trị vào buffer.

        compare(target[, targetStart[, targetEnd[, sourceStart[, sourceEnd]]]]): Phương thức so sánh buffer với buffer khác.

        indexOf(value[, byteOffset][, encoding]): Phương thức tìm vị trí xuất hiện đầu tiên của một giá trị trong buffer.

        buffer[index]: Truy cập vào phần tử cụ thể trong buffer.

Đây chỉ là một số thuộc tính và phương thức phổ biến của Streams và Buffers trong Node.js. Có nhiều thuộc tính và phương thức khác có sẵn, tùy thuộc vào loại stream và mục đích sử dụng cụ thể.
 */