import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Mail, ExternalLink, Monitor, Terminal, Sparkles } from "lucide-react";
import { Navbar } from "@/components/navbar";
import Link from "next/link";

interface Project {
  name: string;
  period: string;
  details: string[];
  stack?: string;
}

interface Career {
  company: string;
  period: string;
  projects: Project[];
}

interface Experience {
  title: string;
  period: string;
  details: string[];
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex flex-col items-center justify-center p-4">
      <div className="max-w-4xl w-full text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          김지예
        </h1>
        <p className="text-xl text-gray-600 mb-4">
          Web Developer
        </p>
        <p className="text-gray-500">
          원하시는 포트폴리오 스타일을 선택해주세요
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl w-full">
        <Link href="/minimal" className="block">
          <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader>
              <CardTitle className="flex items-center justify-center gap-2">
                <Monitor className="h-6 w-6" />
                모던 미니멀
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p className="text-sm text-gray-600">깔끔하고 전문적인 디자인</p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• 여유로운 화이트 스페이스</li>
                  <li>• 타임라인 형태의 경력</li>
                  <li>• 원형 프로그레스바 스킬</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </Link>

        <Link href="/technical" className="block">
          <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer border-blue-500">
            <CardHeader>
              <CardTitle className="flex items-center justify-center gap-2">
                <Terminal className="h-6 w-6" />
                테크니컬 그리드
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p className="text-sm text-gray-600">개발자스러운 다크 테마</p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• 터미널 스타일 소개</li>
                  <li>• 깃허브 스타일 이력</li>
                  <li>• 태그 클라우드 스킬</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </Link>

        <Link href="/professional" className="block">
          <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader>
              <CardTitle className="flex items-center justify-center gap-2">
                <ExternalLink className="h-6 w-6" />
                프로페셔널
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p className="text-sm text-gray-600">전문성이 드러나는 밝은 디자인</p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• 섹션별 강조 디자인</li>
                  <li>• 전문성 중심 레이아웃</li>
                  <li>• 성과 중심 표현</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </Link>
      </div>

      <footer className="mt-12 text-center text-gray-500 text-sm">
        © 2024 김지예. All rights reserved.
      </footer>
    </div>
  );
}

const skills = [
  {
    category: "Programming Languages",
    items: ["Java", "Python", "JavaScript", "HTML", "CSS"]
  },
  {
    category: "Frameworks & Libraries",
    items: ["Spring Framework", "Django", "전자정부프레임워크", "jQuery"]
  },
  {
    category: "Databases",
    items: ["Oracle", "MySQL", "PostgreSQL", "MSSQL", "SQLite"]
  },
  {
    category: "Development Tools",
    items: ["Git", "SVN", "Eclipse", "VSCode", "DBeaver", "HeidiSQL", "SQL Developer"]
  },
  {
    category: "Data Analysis",
    items: ["Matplotlib", "Seaborn", "Tensorflow", "Pandas", "NumPy"]
  },
  {
    category: "Others",
    items: ["RESTful API", "Google Analytics", "NGINX", "WSL2", "amcharts"]
  }
];

const careers: Career[] = [
  {
    company: "시선소프트",
    period: "2024-09 ~ (재직중)",
    projects: [
      {
        name: "축산 스마트팜 빅데이터 플랫폼 구축사업",
        period: "2024-09-09 ~ 2025-03 예정",
        details: [
          "• ICT수집 데이터 마트데이터 수집 Batch 제작",
          "• SBChart(softbowl제품) 활용 차트 시각화",
          "• 유지보수 관련 기능 개선"
        ],
        stack: "Windows / postgreSQL,Oracle 12c / Eclipse, Dbeaver / JAVA / eGovFrame, Mybatis"
      }
    ]
  },
  {
    company: "로다아이티",
    period: "2023-01 ~ 2024-09",
    projects: [
      {
        name: "청주시 데이터허브플랫폼 구축",
        period: "2023-08-10 ~ 2024-06-28",
        details: [
          "• 데이터 구조 설계, ERD 산출물 작성 및 스키마 최적화",
          "• 개발단계 주도(프로젝트 공통 및 세부기능 구현, 개발 산출물 작성)",
          "• sgis 지도 api 프로젝트 적용 및 시각화",
          "• amcharts 5 공통화 적용 및 시각화",
          "• api 데이터 수집 연계 관련 기능 개선 및 적용"
        ],
        stack: "Windows / postgreSQL / Eclipse, Dbeaver / JAVA / eGovFrame, ibatis"
      },
      {
        name: "영동군 스마트 데이터 플랫폼 구축 사업",
        period: "2023-08-02 ~ 2024-03-29",
        details: [
          "• 데이터 구조 설계, ERD 산출물 작성 및 스키마 최적화",
          "• 개발단계 주도(프로젝트 공통 및 세부기능 구현, 개발 산출물 작성)",
          "• sgis 지도 api 프로젝트 적용 및 시각화",
          "• amcharts 5 공통화 적용 및 시각화",
          "• api 데이터 수집 연계 관련 기능 개선 및 적용"
        ],
        stack: "Windows / postgreSQL / Eclipse, Dbeaver / JAVA / eGovFrame, ibatis"
      },
      {
        name: "국방과학연구소 e감사시스템 웹 취약점 점검 및 개선 용역",
        period: "2023-06 ~ 2023-07",
        details: ["• 웹 취약점 점검 조치"]
      }
    ]
  },
  {
    company: "크루메이트",
    period: "2018-03 ~ 2022-06 (4년 4개월)",
    projects: [
      {
        name: "국가기록원 기록물관리정보시스템 통합유지보수",
        period: "2021-09 ~ 2022-06",
        details: [
          "• 운영사이트 에러사항 원인파악 및 조치",
          "• 사용자 문의 응대",
          "• 대용량송수신 모듈 연계 관리",
          "• 기록물 관련 데이터추출",
          "• 웹기록물수집기 관리",
          "• 프로젝트 업무 일감관리 사이트 관리"
        ],
        stack: "Java, 전자정부프레임워크, ibatis, Oracle"
      },
      {
        name: "CJ온스타일 운영",
        period: "2019-10 ~ 2021-05",
        details: [
          "• 출석체크 이벤트개발",
          "• 모니터링 배치 문자 발송관리",
          "• 카톡 공유 관련 이벤트 개발",
          "• 선착순 이벤트 개발",
          "• 실시간 래플 이벤트 개발",
          "• 이벤트 관련 데이터 추출",
          "• (전시)Google Analytics 360 설치"
        ],
        stack: "Java, Spring, mybatis, MYSQL(HeidiSQL), Oracle(SQL Developer)"
      },
      {
        name: "ABC-MART 개발운영",
        period: "2018-09 ~ 2019-09",
        details: [
          "• 쿠폰 적용 불가 상품 리스트 Admin, 운영 기능 개발",
          "• 페이스북 스크립트 픽셀 코드 설치",
          "• Mssql 프로시져 수정",
          "• 광고api설치"
        ],
        stack: "Java, Spring, Jsp, HTML, jQuery, JavaScript, MSSQL"
      },
      {
        name: "네파몰 고도화",
        period: "2018-05 ~ 2018-08",
        details: [
          "• 관리자 사이트의 각종 통계조건검색을 위한 화면 개발",
          "• Admin의 통계 조건검색 back / front",
          "• 오픈 이전 테스트"
        ],
        stack: "Java, Spring, Jsp, HTML, jQuery, JavaScript, Oracle"
      }
    ]
  }
];

const experiences: Experience[] = [
  {
    title: "멀티캠퍼스 빅데이터 교육 수료",
    period: "2022. 06. 30. ~ 2022. 11. 30. (890시간)",
    details: [
      "멀티잇 '서비스 산업 데이터를 활용한 빅데이터 분석' 과정 수료",
      "프로젝트 최우수상 수상",
      "우수훈련생 우수상 수상",
      "",
      "학습 내용:",
      "• 파이썬 프로그래밍 · 알고리즘 · 데이터베이스/SQL",
      "• 웹크롤링/Rest API를 활용한 데이터 수집",
      "• Matplotlib, Seaborn을 활용한 데이터 시각화",
      "• 머신러닝 이론 및 실습(Logistic Regression, NBC, SVM, Random Forest, KNN)",
      "• 딥러닝 이론 및 실습(NN, CNN, RNN, Word2Vec, FastText, BERT 등)"
    ]
  },
  {
    title: "빅데이터 분석을 위한 통계 알고리즘",
    period: "2019. 10. 10. ~ 2019. 10. 11. (16시간)",
    details: ["기관: KITRI 한국정보기술연구원"]
  },
  {
    title: "고등학생 대상 Java 기초 강의 및 상담 멘토링 활동",
    period: "2017. 11. 4.",
    details: ["주최: 대전YMCA"]
  },
  {
    title: "대덕인재개발원 교육 수료",
    period: "2017. 07. 24. ~ 2018. 02. 20. (1120시간)",
    details: [
      "대덕인재개발원 '전자정부 표준프레임워크 응용SW 개발자과정(NCS 7기)' 과정 수료",
      "프로젝트 우수상 수상"
    ]
  },
  {
    title: "내손으로 만드는 사물인터넷 아두이노 DIY 프로젝트",
    period: "2015. 07. ~ 2015. 08.",
    details: ["주최: 대전창조경제혁신센터"]
  },
  {
    title: "모바일 웹앱 시제품 개발 캠프",
    period: "2015. 06. ~ 2015. 07.",
    details: ["주최: 한남대학교 창업지원단"]
  }
];

const projects = [
  {
    title: "딥러닝 모델을 통한 클릭베이트 기사 감지",
    period: "2022",
    skills: ["Django", "SQLite", "gunicorn", "NGINX", "WSL2", "crontab", "HTML", "CSS", "Javascript"],
    features: [
      "독자들에게 뉴스 제목과 본문의 일관성, 제목의 낚시성 등을 예측하고 점수를 제시하는 시스템 구현",
      "올바른 뉴스 기사 선택을 돕는 웹사이트 구현",
      "환경구축, 워드클라우드, crontab, DB기획 담당",
      "5인 팀 프로젝트"
    ],
    link: "https://github.com/Yedam101/finalProject"
  },
  {
    title: "ReviewTicon(리뷰티콘)",
    period: "2022",
    skills: ["Django", "SQLite", "Python3", "Tensorflow", "Konply", "HTML", "CSS", "Javascript", "Ajax", "jQuery", "Apache2.4", "mod_wsgi", "Flask"],
    features: [
      "Django를 활용한 영화 리뷰 이모티콘 분류기 웹사이트",
      "환경구축, DB기획, front-end, back-end 담당",
      "5인 팀 프로젝트"
    ],
    link: "https://github.com/jo-soobin/Reviewticon"
  },
  {
    title: "포트폴리오 웹사이트",
    period: "2024",
    skills: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "Vercel"],
    features: [
      "개인 포트폴리오 웹사이트",
      "반응형 디자인",
      "모던한 UI/UX",
      "Vercel을 통한 자동 배포"
    ],
    link: "https://github.com/zzeeye/portfolio"
  }
];
