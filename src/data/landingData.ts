import { 
  ServiceItem, 
  SolutionItem, 
  ProcessStep, 
  ProjectItem, 
  TestimonialItem, 
  PricingPackage 
} from '../types/landing';

export const COMPANY_INFO = {
  name: 'T&T Digital',
  tagline: 'Kiến Tạo Giải Pháp Số - Nâng Tầm Doanh Nghiệp',
  shortBio: 'Đơn vị tiên phong trong lĩnh vực tư vấn, thiết kế website chuyên nghiệp và phát triển giải pháp phần mềm quản trị thông minh theo yêu cầu.',
  hotline: '0849.632.852',
  email: 'contact@ttdigital.vn',
  supportEmail: 'support@ttdigital.vn',
  address: 'Tòa nhà Landmark 81, 720A Điện Biên Phủ, Phường 22, Bình Thạnh, TP. Hồ Chí Minh',
  branches: [
    'Chi nhánh Hà Nội: Tầng 12, Tòa Keangnam Landmark 72, Nam Từ Liêm, Hà Nội',
    'Chi nhánh Đà Nẵng: 254 Nguyễn Văn Linh, Quận Thanh Khê, TP. Đà Nẵng'
  ],
  workingHours: 'Thứ 2 - Thứ 7: 08:00 - 18:00',
  foundedYear: '2016',
  totalProjects: '350+',
  satisfactionRate: '99.2%',
  activeClients: '180+',
  uptimeGuarantee: '99.98%'
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'web-design',
    title: 'Thiết Kế Website Doanh Nghiệp & E-Commerce',
    category: 'Website Chuyên Nghiệp',
    badge: 'Dịch vụ chủ lực',
    shortDesc: 'Giao diện độc quyền chuẩn UI/UX hiện đại, tốc độ tải trang dưới 1 giây, chuẩn SEO On-page tối đa tỷ lệ chuyển đổi.',
    description: 'Chúng tôi thiết kế các website mang tính bản sắc thương hiệu riêng biệt, tương thích hoàn hảo 100% trên mọi kích thước màn hình từ Smartphone, Tablet đến Desktop lớn. Tối ưu trải nghiệm mua sắm và gia tăng doanh số bền vững.',
    features: [
      'Giao diện thiết kế độc quyền 100% trên Figma',
      'Tối ưu tốc độ tải trang đạt chuẩn Google PageSpeed 95+',
      'Bảo mật SSL, tường lửa chống tấn công mạng đa lớp',
      'Hệ thống quản trị nội dung trực quan, dễ sử dụng',
      'Tích hợp các cổng thanh toán nội địa và quốc tế'
    ],
    metrics: 'Tăng 65% tỷ lệ chuyển đổi khách hàng',
    iconName: 'Globe',
    popular: true
  },
  {
    id: 'custom-software',
    title: 'Phát Triển Phần Mềm Doanh Nghiệp Theo Yêu Cầu',
    category: 'Phần Mềm Doanh Nghiệp',
    badge: 'Giải pháp chuyên sâu',
    shortDesc: 'Hệ thống ERP, CRM, phần mềm quản lý kho vận, nhân sự và chuỗi cung ứng được tinh chỉnh chính xác theo quy trình nghiệp vụ.',
    description: 'Không gò bó vào các phần mềm đóng gói sẵn cứng nhắc, T&T Digital đồng hành xây dựng phần mềm tối ưu đúng theo thói quen vận hành của doanh nghiệp, giúp tinh gọn bộ máy và tiết kiệm đến 40% chi phí vận hành.',
    features: [
      'Phân tích nghiệp vụ (BA) chuyên sâu trước khi lập trình',
      'Kiến trúc Cloud-native mở rộng linh hoạt theo quy mô',
      'Bảo mật dữ liệu cấp ngân hàng với mã hóa đa tầng',
      'Báo cáo trực quan Dashboard BI phân tích doanh thu thời gian thực',
      'Bàn giao toàn bộ mã nguồn và tài liệu kiến trúc'
    ],
    metrics: 'Tiết kiệm 45% thời gian xử lý nghiệp vụ thủ công',
    iconName: 'Cpu',
    popular: true
  },
  {
    id: 'mobile-app',
    title: 'Lập Trình Ứng Dụng Di Động (iOS & Android)',
    category: 'Ứng Dụng Di Động',
    badge: 'Xu hướng tất yếu',
    shortDesc: 'Ứng dụng mượt mà, thông báo đẩy thông minh, trải nghiệm người dùng tự nhiên giúp giữ chân khách hàng trung thành.',
    description: 'Phát triển ứng dụng di động native và cross-platform hiệu năng cao. Tích hợp thanh toán một chạm, định vị bản đồ GPS, quét mã QR và kết nối liền mạch với hệ sinh thái website/phần mềm hiện hữu.',
    features: [
      'Tương thích mượt mà trên cả iOS App Store và Google Play',
      'Hệ thống Push Notification tự động chăm sóc khách hàng',
      'Tích hợp ví điện tử MoMo, ZaloPay, VNPay, thẻ tín dụng',
      'Khả năng hoạt động Offline và đồng bộ tức thì khi có mạng',
      'Hỗ trợ đăng ký và phát hành ứng dụng lên kho ứng dụng'
    ],
    metrics: 'Gia tăng 3.2x tần suất mua lại của người dùng',
    iconName: 'Smartphone'
  },
  {
    id: 'digital-transformation',
    title: 'Chuyển Đổi Số & Tích Hợp Hệ Thống (API)',
    category: 'Tích Hợp Dữ Liệu',
    badge: 'Tự động hóa',
    shortDesc: 'Kết nối đồng bộ dữ liệu giữa Website, Sàn TMĐT, Phần mềm Kế toán (MISA, FAST) và Tổng đài CSKH.',
    description: 'Xóa bỏ tình trạng phân mảnh thông tin giữa các phòng ban. Toàn bộ đơn hàng, tồn kho, công nợ và dữ liệu chăm sóc khách hàng được đồng bộ tự động theo thời gian thực.',
    features: [
      'Kết nối API đa chiều ổn định, độ trễ cực thấp',
      'Đồng bộ đơn hàng tự động từ Shopee, Lazada, TikTok Shop',
      'Tích hợp cổng Hóa đơn điện tử và Phần mềm kế toán',
      'Tự động sao lưu dự phòng dữ liệu điện toán đám mây định kỳ',
      'Giám sát hoạt động hệ thống 24/7 cảnh báo sự cố tức thời'
    ],
    metrics: 'Đồng bộ 100% dữ liệu không sai lệch sai số',
    iconName: 'Layers'
  },
  {
    id: 'performance-security',
    title: 'Nâng Cấp, Tối Ưu Tốc Độ & Bảo Trì Hệ Thống',
    category: 'Hạ Tầng & Vận Hành',
    badge: 'An tâm tuyệt đối',
    shortDesc: 'Khắc phục triệt để tình trạng website chạy chậm, vá lỗ hổng bảo mật, cứu hộ mã độc và tối ưu hạ tầng Server/VPS.',
    description: 'Đội ngũ kỹ sư cấp cao túc trực đảm bảo nền tảng số của doanh nghiệp vận hành ổn định 24/7/365, chịu tải tốt trong các đợt cao điểm khuyến mãi với hàng trăm ngàn lượt truy cập cùng lúc.',
    features: [
      'Đánh giá kiểm tra toàn diện mã nguồn và lỗ hổng',
      'Cấu hình hạ tầng Cloud CDN phân phối nội dung siêu tốc',
      'Cam kết thời gian phản hồi sự cố khẩn cấp dưới 15 phút',
      'Báo cáo định kỳ sức khỏe website và dung lượng lưu trữ',
      'Miễn phí dọn dẹp mã độc và khôi phục dữ liệu nguyên trạng'
    ],
    metrics: 'Cam kết thời gian hoạt động ổn định 99.98%',
    iconName: 'ShieldCheck'
  },
  {
    id: 'ui-ux-design',
    title: 'Tư Vấn Trải Nghiệm Người Dùng & Thiết Kế UI/UX',
    category: 'Thiết Kế Sản Phẩm',
    badge: 'Thấu hiểu người dùng',
    shortDesc: 'Nghiên cứu hành vi người dùng, thiết kế giao diện tinh tế, hiện đại, định vị thương hiệu ở tầm cao mới.',
    description: 'Từ phác thảo ý tưởng (Wireframe) đến bản mẫu tương tác thực tế (Interactive Prototype), chúng tôi tạo nên giao diện không chỉ đẹp mắt mà còn dẫn dắt hành vi khách hàng mua hàng tự nhiên nhất.',
    features: [
      'Khảo sát chân dung khách hàng mục tiêu & bản đồ hành trình',
      'Xây dựng trọn bộ Design System tiêu chuẩn quốc tế',
      'Bản mẫu tương tác (Interactive Click-through Prototype)',
      'Kiểm thử trải nghiệm người dùng thực tế trước khi bàn giao',
      'Tối ưu từng nút bấm, trường nhập liệu để tăng chuyển đổi'
    ],
    metrics: 'Giảm 50% tỷ lệ thoát trang (Bounce Rate)',
    iconName: 'Compass'
  }
];

export const SOLUTIONS_DATA: SolutionItem[] = [
  {
    id: 'sol-retail',
    title: 'Giải Pháp Bán Hàng Đa Kênh Toàn Diện (Omnichannel)',
    subtitle: 'Dành cho chuỗi bán lẻ, siêu thị và thương hiệu thời trang',
    description: 'Hợp nhất toàn bộ dữ liệu kho hàng, đơn hàng, khách hàng từ Website, Cửa hàng trực tiếp, Shopee, TikTok Shop về một màn hình quản trị tập trung duy nhất.',
    benefits: [
      'Kiểm soát tồn kho tự động, không lo bán trùng hàng vượt tồn',
      'Tích lũy điểm thưởng thành viên đồng bộ Online & Cửa hàng',
      'Tự động xuất hóa đơn điện tử ngay khi đơn hàng hoàn tất',
      'Phân bổ đơn hàng thông minh cho chi nhánh gần khách nhất'
    ],
    suitableFor: ['Chuỗi cửa hàng bán lẻ', 'Thương hiệu thời trang, mỹ phẩm', 'Nhà phân phối đồ gia dụng'],
    timeline: '3 - 6 tuần triển khai',
    iconName: 'ShoppingBag'
  },
  {
    id: 'sol-manufacturing',
    title: 'Hệ Thống Quản Lý Sản Xuất & Kho Vận Thông Minh',
    subtitle: 'Dành cho nhà máy chế biến, xưởng sản xuất và logistics',
    description: 'Số hóa toàn diện từ khâu nhập nguyên vật liệu, lập lệnh sản xuất, theo dõi định mức hao hụt, đến đóng gói thành phẩm và quét mã vạch xuất kho vận chuyển.',
    benefits: [
      'Giám sát tiến độ từng công đoạn sản xuất theo thời gian thực',
      'Cảnh báo sớm nguyên vật liệu sắp chạm ngưỡng an toàn',
      'Tối ưu lộ trình giao hàng và kiểm soát chi phí vận chuyển',
      'Giảm thiểu tối đa thất thoát và lãng phí vật tư thừa'
    ],
    suitableFor: ['Doanh nghiệp sản xuất', 'Nhà máy gia công chế tạo', 'Tổng kho logistics & 3PL'],
    timeline: '6 - 12 tuần triển khai',
    iconName: 'PackageCheck'
  },
  {
    id: 'sol-b2b',
    title: 'Cổng Thông Tin Doanh Nghiệp & Đặt Hàng B2B',
    subtitle: 'Dành cho các nhà sản xuất, tổng thầu và đại lý cấp 1',
    description: 'Xây dựng sàn giao dịch phân phối khép kín cho đại lý: Bảng giá theo từng cấp bậc chiết khấu, hạn mức công nợ tự động, đặt hàng số lượng lớn chỉ trong 30 giây.',
    benefits: [
      'Đại lý tự tra cứu tồn kho thực và đặt hàng 24/7',
      'Cơ chế chiết khấu và hạn mức công nợ phân quyền tự động',
      'Báo cáo doanh số và hoa hồng theo từng khu vực phân phối',
      'Cắt giảm hoàn toàn việc gửi bảng giá và đơn hàng qua Zalo/Email'
    ],
    suitableFor: ['Nhà phân phối độc quyền', 'Tổng đại lý vật liệu xây dựng, cơ khí', 'Doanh nghiệp xuất nhập khẩu'],
    timeline: '4 - 8 tuần triển khai',
    iconName: 'Building2'
  },
  {
    id: 'sol-service-crm',
    title: 'Nền Tảng Quản Lý Khách Hàng (CRM) & Lịch Hẹn Dịch Vụ',
    subtitle: 'Dành cho phòng khám, viện thẩm mỹ, trung tâm đào tạo, tài chính',
    description: 'Tự động thu thập khách hàng tiềm năng từ quảng cáo, nhắc lịch hẹn tự động qua SMS/Zalo ZNS, ghi nhận nhật ký chăm sóc và đo lường hiệu suất tư vấn viên.',
    benefits: [
      'Không bỏ sót bất kỳ một khách hàng tiềm năng nào từ kênh Marketing',
      'Lịch hẹn tự động đồng bộ tránh trùng lịch bác sĩ/chuyên gia',
      'Đo lường chính xác tỷ lệ chốt đơn và doanh thu từng nhân viên',
      'Bảo mật danh sách khách hàng, chống thất thoát dữ liệu nội bộ'
    ],
    suitableFor: ['Phòng khám, Nha khoa, Thẩm mỹ viện', 'Trung tâm giáo dục & đào tạo', 'Công ty luật, kiểm toán, tài chính'],
    timeline: '3 - 5 tuần triển khai',
    iconName: 'CalendarCheck'
  }
];

export const PROCESS_DATA: ProcessStep[] = [
  {
    step: 1,
    title: 'Tiếp Nhận & Khảo Sát Nghiệp Vụ',
    duration: '1 - 2 Ngày',
    description: 'Chuyên gia tư vấn T&T Digital gặp gỡ trực tiếp hoặc trực tuyến, lắng nghe tường tận bài toán thực tế, mục tiêu kinh doanh và ngân sách của doanh nghiệp.',
    deliverables: [
      'Tài liệu phác thảo yêu cầu kỹ thuật (BRD)',
      'Đề xuất kiến trúc giải pháp tối ưu chi phí',
      'Báo giá chi tiết theo từng hạng mục rõ ràng'
    ],
    iconName: 'Search'
  },
  {
    step: 2,
    title: 'Thiết Kế UI/UX & Duyệt Bản Mẫu',
    duration: '3 - 7 Ngày',
    description: 'Đội ngũ thiết kế tạo Wireframe chi tiết và bản mẫu màu sắc chuẩn bộ nhận diện. Khách hàng trực tiếp trải nghiệm tương tác trước khi tiến hành viết mã.',
    deliverables: [
      'File thiết kế giao diện Figma độ phân giải cao',
      'Bản mẫu tương tác (Interactive Click-through)',
      'Biên bản nghiệm thu thiết kế UI/UX'
    ],
    iconName: 'Palette'
  },
  {
    step: 3,
    title: 'Lập Trình & Kiểm Thử Nội Bộ',
    duration: '2 - 6 Tuần',
    description: 'Phát triển theo phương pháp Agile linh hoạt. Khách hàng được cập nhật tiến độ liên tục hàng tuần qua môi trường thử nghiệm (Staging).',
    deliverables: [
      'Mã nguồn sạch, có chú thích và tài liệu chuẩn',
      'Hệ thống quản trị nội dung hoàn chỉnh',
      'Kiểm thử tự động đa nền tảng và bảo mật'
    ],
    iconName: 'Code2'
  },
  {
    step: 4,
    title: 'Kiểm Thử Nghiệm Thu (UAT) & Đào Tạo',
    duration: '3 - 5 Ngày',
    description: 'Cùng khách hàng kiểm thử thực tế mọi luồng nghiệp vụ. Hướng dẫn trực quan cách vận hành, cung cấp video và cẩm nang quản trị dễ hiểu.',
    deliverables: [
      'Buổi đào tạo trực tiếp cho đội ngũ vận hành',
      'Tài liệu hướng dẫn sử dụng và video chi tiết',
      'Biên bản nghiệm thu bàn giao hệ thống'
    ],
    iconName: 'CheckCircle2'
  },
  {
    step: 5,
    title: 'Bàn Giao Toàn Diện & Đồng Hành 24/7',
    duration: 'Đồng hành trọn đời',
    description: 'Đưa hệ thống lên môi trường chính thức (Go-live). Miễn phí bảo hành 12 - 24 tháng, định kỳ sao lưu dữ liệu và hỗ trợ xử lý kỹ thuật 24/7.',
    deliverables: [
      'Bàn giao 100% mã nguồn và quyền sở hữu',
      'Cam kết thời gian phản hồi sự cố dưới 15 phút',
      'Định kỳ nâng cấp bảo mật và sao lưu Cloud'
    ],
    iconName: 'ShieldCheck'
  }
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'prj-phuongvu-ielts',
    title: 'Phuong Vu IELTS - Nền Tảng Luyện Thi IELTS Thông Minh & Exam Auto-Parser',
    client: 'Phương Vũ IELTS Academy',
    category: 'web-corporate',
    categoryLabel: 'Giáo Dục & EdTech AI',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=900&q=80',
    summary: 'Nền tảng luyện thi IELTS thông minh 4 kỹ năng (Listening, Reading, Writing, Speaking) với AI chấm điểm, phương pháp Linearthinking và Admin Portal bóc tách đề thi tự động.',
    highlights: ['AI Chấm Điểm 4 Kỹ Năng', 'Bóc Tách Đề Thi Tự Động', 'Giao Diện Chuẩn UI/UX'],
    impact: {
      metric: '+320%',
      label: 'Học viên làm bài thi thử mỗi tháng'
    },
    liveDemoUrl: 'https://phuongvuielts.vercel.app/'
  },
  {
    id: 'prj-dungtienganh',
    title: 'DungTiengAnh - Nền Tảng Học & Luyện Thi Tiếng Anh Trực Tuyến Chuyên Sâu',
    client: 'Hệ Thống Tiếng Anh Cô Dung',
    category: 'web-corporate',
    categoryLabel: 'E-Learning Giáo Dục',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80',
    summary: 'Website học tiếng Anh với lộ trình cá nhân hóa, ôn thi THPT Quốc gia cùng Cô Dung, hệ thống thi trắc nghiệm bấm giờ và quản lý tiến độ học tập toàn diện.',
    highlights: ['Lộ Trình Cá Nhân Hóa', 'Thi Trắc Nghiệm Trực Tuyến', 'Tối Ưu Chuẩn SEO Google 99/100'],
    impact: {
      metric: '15.000+',
      label: 'Học sinh ôn luyện thường xuyên'
    },
    liveDemoUrl: 'https://dungtienganh.com/'
  },
  {
    id: 'prj-luckynails',
    title: 'Lucky Nails & Spa UK - Hệ Thống Đặt Lịch & Giới Thiệu Spa Cao Cấp Tại Anh Quốc',
    client: 'Lucky Nails & Spa (United Kingdom)',
    category: 'web-corporate',
    categoryLabel: 'Dịch Vụ Spa Quốc Tế',
    image: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=900&q=80',
    summary: 'Giao diện sang trọng chuẩn phong cách Anh Quốc với hệ thống đặt lịch hẹn thông minh (Online Booking), bảng giá dịch vụ GBP chi tiết và trải nghiệm mượt mà trên di động.',
    highlights: ['Hệ Thống Đặt Lịch Online', 'Bảng Giá Chuẩn Thị Trường UK', 'Tải Trang Dưới 0.8s'],
    impact: {
      metric: '+180%',
      label: 'Khách hàng đặt lịch hẹn online'
    },
    liveDemoUrl: 'https://www.luckynailsandspa.uk/'
  },
  {
    id: 'prj-sigmadnb',
    title: 'Sigma Design & Build Canada - Cổng Doanh Nghiệp Kiến Trúc & Xây Dựng Bắc Mỹ',
    client: 'Sigma Design & Build (Canada)',
    category: 'web-corporate',
    categoryLabel: 'Kiến Trúc & Xây Dựng Canada',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80',
    summary: 'Website doanh nghiệp kiến trúc cao cấp chuyên về chuyển đổi đa căn hộ (multi-unit conversions), cải tạo nội thất và tổng thầu xây dựng tại thị trường Canada.',
    highlights: ['Portfolio Dự Án Sang Trọng', 'Form Nhận Báo Giá CAD', 'Chuẩn SEO Địa Phương Canada'],
    impact: {
      metric: '+240%',
      label: 'Lead yêu cầu tư vấn cải tạo nhà'
    },
    liveDemoUrl: 'https://www.sigmadnb.ca/'
  },
  {
    id: 'prj-loopbook',
    title: 'LoopBook - Nền Tảng Đọc Sách Số & Thương Mại Sách Trực Tuyến Đa Năng',
    client: 'LoopBook Platform',
    category: 'ecommerce',
    categoryLabel: 'E-Commerce Sách Số',
    image: 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=900&q=80',
    summary: 'Nền tảng mua sắm và đọc sách hiện đại với bộ lọc thể loại đa tầng, giỏ hàng tức thì, đọc thử chương mẫu trực quan và hệ thống đánh giá sách cộng đồng.',
    highlights: ['Giỏ Hàng Mua Sách 1-Chạm', 'Bộ Đọc Thử Trực Tuyến', 'Tốc Độ Lọc Danh Mục Siêu Nhanh'],
    impact: {
      metric: '+65%',
      label: 'Tỷ lệ khách mua thêm sách liên quan'
    },
    liveDemoUrl: 'https://loop-book-tawny.vercel.app/'
  },
  {
    id: 'prj-urbanroast',
    title: 'Urban Roast Cafe - Cửa Hàng Trực Tuyến Specialty Coffee & Đặt Món Nhanh',
    client: 'Urban Roast Specialty Coffee',
    category: 'ecommerce',
    categoryLabel: 'F&B & E-Commerce',
    image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=900&q=80',
    summary: 'Website bán hạt cà phê rang xay cao cấp và đặt đồ uống trực tiếp với tone màu ấm áp tinh tế, menu tương tác sinh động và thanh toán linh hoạt.',
    highlights: ['Menu Đồ Uống Tương Tác', 'Đặt Hàng & Giao Hỏa Tốc', 'Giao Diện Ấm Áp Sắc Nét'],
    impact: {
      metric: '+195%',
      label: 'Đơn hàng mua hạt cà phê rang xay'
    },
    liveDemoUrl: 'https://urban-roast.vercel.app/'
  },
  {
    id: 'prj-ignitefitness',
    title: 'Ignite Fitness - Chuỗi Phòng Tập Gym & Đăng Ký Hội Viên Online New Way To Fit',
    client: 'Ignite Fitness Vietnam',
    category: 'web-corporate',
    categoryLabel: 'Thể Thao & Dịch Vụ',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=900&q=80',
    summary: 'Cổng thông tin chuỗi phòng tập gym cao cấp với tính năng đăng ký 7 ngày tập thử miễn phí, xem bảng giá gói tập, lịch huấn luyện viên cá nhân PT và tra cứu chi nhánh.',
    highlights: ['Đăng Ký Tập Thử Tự Động', 'Lịch Lớp Học & PT Trực Tuyến', 'Giao Diện Tràn Đầy Năng Lượng'],
    impact: {
      metric: '4.800+',
      label: 'Hội viên đăng ký tập thử mỗi quý'
    },
    liveDemoUrl: 'https://ignitefitness-five.vercel.app/'
  },
  {
    id: 'prj-pizzan',
    title: 'Biteblitz Fast Food - Landing Page Đặt Pizza & Giao Hàng Tận Nơi Tức Thì',
    client: 'Biteblitz Fast Food & Pizza',
    category: 'ecommerce',
    categoryLabel: 'Landing Page F&B',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=900&q=80',
    summary: 'Landing page đặt món thức ăn nhanh và Pizza Ý nghệ thuật với tốc độ chốt đơn cao, tùy biến topping theo ý thích và tính phí vận chuyển tự động.',
    highlights: ['Chọn Topping Tùy Biến', 'Tính Phí Ship Tự Động', 'Tỷ Lệ Chốt Đơn Vượt Trội'],
    impact: {
      metric: '+145%',
      label: 'Doanh thu đơn hàng giao tận nhà'
    },
    liveDemoUrl: 'https://food-pizzan.vercel.app/'
  },
  {
    id: 'prj-beautyblendz',
    title: 'Beauty Blendz - Cửa Hàng Mỹ Phẩm & Chăm Sóc Da Cao Cấp Chuẩn UI/UX',
    client: 'Beauty Blendz Cosmetics',
    category: 'ecommerce',
    categoryLabel: 'Mỹ Phẩm & Skincare',
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=900&q=80',
    summary: 'Website thương mại điện tử mỹ phẩm phong cách tối giản thanh lịch, tối ưu trải nghiệm khám phá sản phẩm dưỡng da và đồng bộ giỏ hàng đa kênh.',
    highlights: ['Thiết Kế Tối Giản Tinh Tế', 'Bộ Lọc Sản Phẩm Chuyên Sâu', 'Tối Ưu Mobile First 100%'],
    impact: {
      metric: '+160%',
      label: 'Thời gian dừng chân của khách hàng'
    },
    liveDemoUrl: 'https://beauty-blendz.vercel.app/'
  },
  {
    id: 'prj-tet2026',
    title: 'Countdown Tết 2026 TunTon - Landing Page Đón Năm Mới & Gửi Thiệp Chúc Mừng',
    client: 'TunTon Studio',
    category: 'landing-page',
    categoryLabel: 'Landing Page Sự Kiện',
    image: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=900&q=80',
    summary: 'Landing page lễ hội đón chào năm mới 2026 với đồng hồ đếm ngược thời gian thực, hiệu ứng pháo hoa chuyển động mượt mà và form gửi gắm lời chúc yêu thương.',
    highlights: ['Đồng Hồ Countdown Realtime', 'Hiệu Ứng Animation Mượt Mà', 'Chia Sẻ Thiệp Lên Facebook/Zalo'],
    impact: {
      metric: '50.000+',
      label: 'Lượt truy cập trải nghiệm đếm ngược'
    },
    liveDemoUrl: 'https://tet2026-tunton.vercel.app/'
  }
];

export const PRICING_PACKAGES: PricingPackage[] = [
  {
    id: 'pkg-landing',
    name: 'Thiết Kế Landing Page Tối Ưu Chuyển Đổi',
    badge: 'Chỉ từ 1.500.000\u00A0đ',
    priceEstimate: 'Từ 1.500.000\u00A0đ',
    unit: 'Trọn gói chìa khóa trao tay',
    suitable: 'Phù hợp chạy quảng cáo Facebook, Google Ads, TikTok chốt đơn và thu thập data khách hàng nhanh chóng.',
    timeEstimate: '2 - 3 ngày làm việc',
    features: [
      'Thiết kế 1 trang duy nhất chuẩn UI/UX chuyển đổi cao',
      'Tương thích 100% Smartphone, Tablet, Laptop, Desktop',
      'Tốc độ tải trang siêu tốc dưới 1 giây đạt chuẩn Google',
      'Form thu thập thông tin khách hàng tự động về Google Sheet/Email/Zalo',
      'Cài đặt nút gọi nhanh Hotline, chat Zalo, Messenger',
      'Cài đặt trọn bộ mã theo dõi Facebook Pixel, TikTok Pixel, Google Ads',
      'Bảo hành kỹ thuật trọn đời'
    ]
  },
  {
    id: 'pkg-corporate',
    name: 'Website Doanh Nghiệp Chuẩn SEO',
    badge: 'Khởi đầu vững chắc',
    priceEstimate: 'Từ 3.500.000\u00A0đ',
    unit: 'Trọn gói dự án',
    suitable: 'Phù hợp doanh nghiệp vừa và nhỏ, công ty dịch vụ cần khẳng định uy tín thương hiệu chuyên nghiệp.',
    timeEstimate: '4 - 7 ngày làm việc',
    features: [
      'Giao diện thiết kế độc quyền theo nhận diện thương hiệu',
      'Tương thích 100% Mobile, Tablet, PC',
      'Tối ưu chuẩn SEO On-page Google điểm 95+',
      'Tích hợp Chatbot, Zalo, Messenger, Hotline',
      'Hệ thống quản trị nội dung CMS tiếng Việt dễ sử dụng',
      'Miễn phí tên miền quốc tế .com & Hosting SSD tốc độ cao 1 năm',
      'Bảo hành kỹ thuật miễn phí 12 tháng'
    ]
  },
  {
    id: 'pkg-ecommerce',
    name: 'Website Bán Hàng & Sàn TMĐT (Kèm Hosting)',
    badge: 'Lựa chọn phổ biến nhất',
    isPopular: true,
    priceEstimate: 'Từ 7.000.000\u00A0đ',
    unit: 'Trọn gói bao gồm Hosting',
    suitable: 'Dành cho các cửa hàng, nhà phân phối và thương hiệu bán lẻ muốn bứt phá doanh số Online và đồng bộ sàn TMĐT.',
    timeEstimate: '7 - 12 ngày làm việc',
    features: [
      'TẶNG KÈM HOSTING TỐC ĐỘ CAO 1 NĂM (Trị giá 2.500.000\u00A0đ)',
      'Giỏ hàng, Đặt hàng & Quản lý tồn kho tự động',
      'Đồng bộ đơn hàng và sản phẩm với sàn Shopee, TikTok Shop',
      'Tích hợp thanh toán online VietQR Pro, VNPay, MoMo, Visa/Master',
      'Tự động tính phí ship theo đơn vị vận chuyển (GHTK, Viettel Post, GHN)',
      'Hệ thống mã giảm giá (Voucher), Flash Sale kích cầu',
      'Báo cáo doanh thu & Đơn hàng trực quan',
      'Bảo hành & Hỗ trợ kỹ thuật 24 tháng'
    ]
  },
  {
    id: 'pkg-custom',
    name: 'Phần Mềm Quản Trị (ERP / CRM / Web App)',
    badge: 'Tùy biến cao cấp',
    priceEstimate: 'Từ 12.000.000\u00A0đ',
    unit: 'Tùy biến theo quy trình nghiệp vụ',
    suitable: 'Dành cho doanh nghiệp cần hệ thống ERP, CRM, tự động hóa quy trình hoặc xây dựng nền tảng SaaS riêng biệt.',
    timeEstimate: '15 - 25 ngày làm việc',
    features: [
      'Khảo sát và lập tài liệu phân tích nghiệp vụ BA chuyên sâu miễn phí',
      'Kiến trúc hệ thống chịu tải cao, mở rộng không giới hạn',
      'Phân quyền đa cấp bậc nhân sự chặt chẽ, bảo mật đa tầng',
      'Kết nối API với các phần mềm kế toán (MISA/FAST), kho bãi sẵn có',
      'Hỗ trợ đào tạo trực tiếp toàn bộ nhân viên',
      'Bàn giao 100% mã nguồn và quyền sở hữu độc quyền',
      'Hợp đồng bảo trì định kỳ và hỗ trợ kỹ thuật trọn đời'
    ]
  }
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 'test-1',
    name: 'Ông Nguyễn Hoàng Long',
    position: 'Tổng Giám Đốc',
    company: 'Công ty Cổ phần VinaWealth Holdings',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    content: 'T&T Digital làm việc cực kỳ chuyên nghiệp và kỷ luật về tiến độ. Website mới không chỉ có giao diện đẳng cấp vượt trội mà tốc độ mở trang chỉ chớp mắt. Lượng khách hàng thượng lưu liên hệ tư vấn dịch vụ tài chính của chúng tôi tăng hơn gấp đôi sau 3 tháng bàn giao.',
    rating: 5,
    projectType: 'Website Doanh Nghiệp Cao Cấp'
  },
  {
    id: 'test-2',
    name: 'Bà Trần Thu Trang',
    position: 'Giám Đốc Vận Hành',
    company: 'Hệ thống Phòng khám & Viện Thẩm Mỹ Aura Clinic',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    content: 'Trước đây khi chưa có App và CRM của T&T Digital, lễ tân của chúng tôi luôn bị quá tải trong việc gọi điện xác nhận lịch hẹn. Giờ đây mọi quy trình từ book lịch, chọn chuyên gia đến tích điểm đều tự động 100%. Tỷ lệ hủy lịch giảm hẳn 75%. Rất cảm ơn đội ngũ kỹ sư T&T Digital!',
    rating: 5,
    projectType: 'Ứng Dụng Di Động & CRM Quản Lý'
  },
  {
    id: 'test-3',
    name: 'Ông Lê Minh Tuấn',
    position: 'Giám Đốc Chuỗi Cung Ứng',
    company: 'TransPacific Logistics JSC',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    content: 'Điều tôi đánh giá cao nhất ở T&T Digital là khả năng hiểu nghiệp vụ kho vận rất nhanh. Họ không đơn thuần chỉ là thợ code mà thực sự đóng vai trò là chuyên gia tư vấn giải pháp. Phần mềm ERP vận hành trơn tru giúp chúng tôi tiết kiệm hàng trăm triệu tiền thất thoát mỗi tháng.',
    rating: 5,
    projectType: 'Hệ Thống ERP & Quản Lý Đội Xe'
  }
];

export const WHY_CHOOSE_US = [
  {
    id: 'why-1',
    title: 'Giao Diện Thiết Kế Độc Quyền',
    description: 'Nói không hoàn toàn với giao diện mẫu có sẵn rẻ tiền. Từng đường nét, icon và màu sắc được kiến tạo riêng theo đúng cá tính thương hiệu của bạn.',
    iconName: 'Palette'
  },
  {
    id: 'why-2',
    title: 'Tốc Độ Tải Trang Dưới 1 Giây',
    description: 'Ứng dụng kiến trúc công nghệ hiện đại tối tân, tối ưu hóa hình ảnh và bộ nhớ đệm giúp website mở tức thì, tối ưu điểm chuẩn SEO Google.',
    iconName: 'Zap'
  },
  {
    id: 'why-3',
    title: 'Bàn Giao 100% Mã Nguồn Sở Hữu',
    description: 'Bạn nắm toàn quyền sở hữu tài sản số của mình. Không bị ràng buộc bởi hợp đồng giữ code, tự do mở rộng và lưu trữ trên bất kỳ máy chủ nào.',
    iconName: 'FileCode2'
  },
  {
    id: 'why-4',
    title: 'Cam Kết Tiến Độ Đúng Hạn',
    description: 'Quy trình Agile minh bạch với mốc thời gian rõ ràng. Có điều khoản thưởng phạt tiến độ cụ thể trong hợp đồng pháp lý đảm bảo sự yên tâm.',
    iconName: 'Clock'
  },
  {
    id: 'why-5',
    title: 'Bảo Hành Chu Đáo - Hỗ Trợ 24/7',
    description: 'Bảo hành miễn phí lên đến 24 tháng. Đội ngũ kỹ thuật túc trực 24/7 tiếp nhận và xử lý sự cố trong vòng 15 phút, không để gián đoạn kinh doanh.',
    iconName: 'Headphones'
  },
  {
    id: 'why-6',
    title: 'Bảo Mật Cấp Cao Đa Lớp',
    description: 'Tích hợp chuẩn mã hóa dữ liệu cao cấp, bảo vệ hệ thống trước các cuộc tấn công DDoS, SQL Injection và rò rỉ dữ liệu thông tin khách hàng.',
    iconName: 'ShieldAlert'
  }
];

export const FAQ_DATA = [
  {
    question: 'Thời gian hoàn thành một website hoặc phần mềm thường mất bao lâu?',
    answer: 'Thời gian tùy thuộc vào độ phức tạp của từng loại hình. Với landing page chỉ từ 2 - 3 ngày làm việc. Với website giới thiệu doanh nghiệp tiêu chuẩn thường mất từ 4 - 7 ngày. Website thương mại điện tử từ 7 - 12 ngày. Các hệ thống phần mềm quản lý (ERP/CRM) chuyên sâu theo nghiệp vụ thường từ 2 - 4 tuần. Chúng tôi luôn cam kết mốc thời gian cụ thể trên hợp đồng pháp lý.'
  },
  {
    question: 'Sau khi bàn giao, tôi có thể tự quản trị và chỉnh sửa nội dung dễ dàng không?',
    answer: 'Hoàn toàn dễ dàng. T&T Digital xây dựng hệ thống quản trị nội dung (CMS) bằng tiếng Việt trực quan, thân thiện ngay cả với người không am hiểu kỹ thuật. Ngoài ra, chúng tôi tổ chức buổi đào tạo trực tiếp và cung cấp trọn bộ video hướng dẫn từng bước để đội ngũ của bạn tự tin làm chủ hệ thống.'
  },
  {
    question: 'Doanh nghiệp của tôi có được sở hữu mã nguồn (Source code) không?',
    answer: 'Chắc chắn có. T&T Digital cam kết bàn giao 100% mã nguồn hoàn chỉnh, tài liệu kiến trúc và toàn quyền sở hữu trí tuệ cho doanh nghiệp sau khi hoàn tất nghiệm thu thanh toán. Doanh nghiệp tự do quản lý và triển khai trên hạ tầng máy chủ của riêng mình.'
  },
  {
    question: 'Chính sách bảo hành và bảo trì hệ thống của T&T Digital như thế nào?',
    answer: 'Mọi sản phẩm của T&T Digital đều được bảo hành kỹ thuật miễn phí từ 12 đến 24 tháng. Chúng tôi định kỳ sao lưu dữ liệu, cập nhật bản vá bảo mật và hỗ trợ kỹ thuật 24/7. Nếu có bất kỳ sự cố phát sinh nào, kỹ sư của chúng tôi sẽ tiếp nhận và xử lý ngay trong vòng 15 phút.'
  },
  {
    question: 'T&T Digital có hỗ trợ kết nối với phần mềm kế toán, kho bãi hoặc tổng đài có sẵn của công ty tôi không?',
    answer: 'Có. Chúng tôi có kinh nghiệm dày dặn trong việc tích hợp API với các phần mềm kế toán phổ biến như MISA, FAST, Bravo, các đơn vị vận chuyển (GHTK, Viettel Post, GHN), cổng thanh toán (VNPay, MoMo, ZaloPay) và các hệ thống tổng đài CSKH VoIP.'
  }
];
