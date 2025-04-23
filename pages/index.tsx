import React from 'react';
import Header from '../components/Header';
import { Carousel, Card, Row, Col, Button } from 'antd';
import { UserOutlined, BookOutlined, TrophyOutlined, StarOutlined } from '@ant-design/icons';

const iconStyle: React.CSSProperties = {
  fontSize: 48,  // Use number instead of string for pixels
  color: 'orange',
  margin: '20px 0',
  textAlign: 'center' as const,  // Use 'as const' to narrow the type
};

const HomePage = () => {
  return (
    <div style={{ padding: '0 70px' }}>
      <Header />
      <main style={{ padding: '0px', margin: '0 auto' }}>
        <Carousel autoplay arrows style={{ marginBottom: '20px' }}>
          <div style={{ position: 'relative', textAlign: 'center' }}>
            <img
              src="https://borigaminstitute.in/wp-content/uploads/2025/04/cropped-WhatsApp-Image-2025-04-20-at-12.50.11-PM-scaled-1-2048x773.jpeg"
              alt="Slide 1"
              style={{ width: '100%' }}
            />
          </div>
          <div style={{ position: 'relative', textAlign: 'center' }}>
            <img src="/assets/carousel-2.jpg" alt="Slide 2" style={{ width: '100%' }} />
          </div>
          <div style={{ position: 'relative', textAlign: 'center' }}>
            <img src="/assets/carousel-3.jpg" alt="Slide 3" style={{ width: '100%' }} />
          </div>
        </Carousel>

        {/* Toppers and About Us Section */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', padding: '20px' }}>
          <div style={{ flex: '1 1 50%', paddingRight: '20px' }}></div>
          <div style={{ flex: '1 1 45%', paddingLeft: '20px' }}>
            <h2 style={{
              fontSize: '28px',
              fontWeight: 'bold',
              fontFamily: '"Open Sans", sans-serif',
              color: '#002147',
              padding: '0 60px'
            }}>
              About Us
            </h2>
            {/* <div style={{
  height: '4px',
  width: '50px',
  backgroundColor: 'orange',
  margin: '10px 0',
  padding: '0 60px'
}}></div> */}
            <p style={{
              padding: '0 60px',
              fontSize: '14px',
              fontFamily: '"Open Sans", sans-serif',
              color: '#666666',
              lineHeight: '1.6',
              textAlign: 'justify'
            }}>
              Borigam Coaching Institution, established in 2019, is dedicated to nurturing creative minds through
              exceptional coaching for design and architecture entrance exams like NIFT, NID, NATA, B.ARCH, UCEED,
              and CEED. With personalized learning, detailed study material, and regular mock tests available both
              offline and online, we ensure students are fully prepared. Our proven success record reflects our
              commitment to helping students achieve their dreams of securing admission to prestigious colleges.
            </p>
            <a href="#" style={{
              fontFamily: '"Open Sans", sans-serif',
              color: 'orange',
              padding: '0 60px'
            }}>
              Continue Reading...
            </a>
            <br /><br /><br /><br />
          </div>

        </div>
        <h1 style={{
          color: '#002147',
          fontSize: '22px',
          fontFamily: '"Open Sans", sans-serif', fontWeight: 'bold', textAlign: 'center'
        }}>
          Design & Architecture Entrance Exam Coaching
        </h1>

        <section style={{ padding: '40px 20px' }}>
          <section style={{ padding: '40px 20px', backgroundColor: '#ffffff' }}>
            <Row gutter={[32, 32]}>
              {/* Left Column: Coaching Info in Cards */}
              <Col xs={24} md={12}>
                <div>
                  <Row gutter={[16, 16]}>
                    {/* Top Row: First Two Cards */}
                    <Col xs={24} sm={12}>
                      <Card hoverable style={{ textAlign: 'center', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                        <h3 style={{ color: '#ff6600' }}>Design</h3>
                        <p>Entrance Exam Coaching</p>
                        <p>NIFT | NID | UCEED | CEED | FDDI | UID | WUD</p>
                      </Card>
                    </Col>
                    <Col xs={24} sm={12}>
                      <Card hoverable style={{ textAlign: 'center', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                        <h3 style={{ color: '#ff6600' }}>Architecture</h3>
                        <p>Entrance Exam Coaching</p>
                        <p>NATA | B.Arch | IIT-AAT</p>
                      </Card>
                    </Col>
                  </Row>

                  <Row gutter={[16, 16]}>
                    {/* Bottom Row: Last Two Cards */}
                    <Col xs={24} sm={12}>
                      <Card hoverable style={{ textAlign: 'center', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                        <h3 style={{ color: '#ff6600' }}>BFA | Interior Design</h3>
                        <p>Entrance Exam Coaching</p>
                      </Card>
                    </Col>
                    <Col xs={24} sm={12}>
                      <Card hoverable style={{ textAlign: 'center', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                        <h3 style={{ color: '#ff6600' }}>Foundation Program (2 Yrs)</h3>
                        <p>For 11th Students</p>
                      </Card>
                    </Col>
                  </Row>
                </div>
              </Col>

              {/* Right Column: Latest News in a Single Card */}
              <Col xs={24} md={12}>
                <Card hoverable style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                  <div style={{ padding: '0 60px' }}>
                    <h2 style={{ color: '#002147', fontWeight: 'bold' }}>LATEST NEWS</h2>
                    <ul style={{ paddingLeft: '20px' }}>
                      <li style={{ marginBottom: '15px' }}>
                        <strong>New Batches for NIFT, NID, U/CEED -2025-26 Entrance Coaching.</strong><br />
                        <small>Starting from 26th & 27th April, 2025 — <em>By Takshshila, 21 Apr, 2025</em></small>
                      </li>
                      <li style={{ marginBottom: '15px' }}>
                        <strong>New Batches for NATA & JEE Architecture - 2025</strong><br />
                        <small>Starting from 26th & 27th April, 2025 — <em>By Takshshila, 21 Apr, 2025</em></small>
                      </li>
                      <li style={{ marginBottom: '15px' }}>
                        <strong>NIFT | NID Situation Test - 2025</strong><br />
                        <small>Batch starts 26th & 27th April, 2025 — <em>By Takshshila, 21 Apr, 2025</em></small>
                      </li>
                      <li style={{ marginBottom: '15px' }}>
                        <strong>NATA 2025 Examination Dates are announced</strong><br />
                        <small><em>By Takshshila, 08 Feb, 2025</em></small>
                      </li>
                    </ul>
                    <div style={{ textAlign: 'right' }}>
                      <Button type="primary" size="middle">Browse All</Button>
                    </div>
                  </div>
                </Card>
              </Col>
            </Row>
          </section>
          <h1>Your Career guide at every step with Takshshila</h1>

          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12} md={6}>
              <Card hoverable cover={<UserOutlined style={iconStyle} />}>
                <h2>Advanced Batch</h2>
                <p>Interactive classroom and online training for NID, NIFT, UCEED & CEED.</p>
              </Card>
            </Col>
            <Col xs={24} sm={12} md={6}>
              <Card hoverable cover={<BookOutlined style={iconStyle} />}>
                <h2>Foundation Batch</h2>
                <p>Coaching with dedicated worksheets for NATA, JEE B.Arch & B.Plan.</p>
              </Card>
            </Col>
            <Col xs={24} sm={12} md={6}>
              <Card hoverable cover={<TrophyOutlined style={iconStyle} />}>
                <h2>Crash course</h2>
                <p>Entrance coaching for BFI programs and interior design careers.</p>
              </Card>
            </Col>
            <Col xs={24} sm={12} md={6}>
              <Card hoverable cover={<StarOutlined style={iconStyle} />}>
                <h2>Top design & architecture colleges</h2>
                <p>Perfect for 11th grade students starting early in design fields.</p>
              </Card>
            </Col>
            <Col xs={24} sm={12} md={6}>
              <Card hoverable cover={<StarOutlined style={iconStyle} />}>
                <h2>Previous year question papers and mock test series</h2>
                <p>Get your design and architecture portfolios ready with expert help.</p>
              </Card>
            </Col>
          </Row>

          <div style={{ backgroundColor: 'black', color: 'white', padding: '40px 20px' }}>
            <Row justify="space-around" gutter={[16, 16]}>
              <Col xs={24} sm={12} md={6} style={{ textAlign: 'center' }}>
                <h2 style={{ fontSize: '36px', fontWeight: 'bold' }}>5000</h2>
                <p>Selected in Design Colleges</p>
              </Col>
              <Col xs={24} sm={12} md={6} style={{ textAlign: 'center' }}>
                <h2 style={{ fontSize: '36px', fontWeight: 'bold' }}>8000</h2>
                <p>Selected in Architecture</p>
              </Col>
              <Col xs={24} sm={12} md={6} style={{ textAlign: 'center' }}>
                <h2 style={{ fontSize: '36px', fontWeight: 'bold' }}>100</h2>
                <p>UCEED</p>
              </Col>
              <Col xs={24} sm={12} md={6} style={{ textAlign: 'center' }}>
                <h2 style={{ fontSize: '36px', fontWeight: 'bold' }}>2001</h2>
                <p>Since Year</p>
              </Col>
            </Row>
          </div>
          <br /><br />
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h1>GALLERY</h1>
          </div>

          <Carousel autoplay style={{ margin: '40px 0' }}>
            <div style={{ textAlign: 'center' }}>
              <img src="/assets/architecture1.jpg" alt="College Slide 1" style={{ width: '80%', height: 'auto', borderRadius: '10px' }} />
            </div>
            <div style={{ textAlign: 'center' }}>
              <img src="/assets/architecture2.jpg" alt="College Slide 2" style={{ width: '80%', height: 'auto', borderRadius: '10px' }} />
            </div>
            <div style={{ textAlign: 'center' }}>
              <img src="/assets/architecture3.jpg" alt="College Slide 3" style={{ width: '80%', height: 'auto', borderRadius: '10px' }} />
            </div>
          </Carousel>

          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <Button type="primary" size="large">BROWSE GALLERY &gt;&gt;</Button>
          </div>

          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h1>LATEST NEWS</h1>
          </div>

          {/* EXTRA THREE CARDS */}
          <Row gutter={[16, 16]} style={{ marginTop: '20px' }}>
            <Col xs={24} sm={12} md={8}>
              <Card hoverable>
                <h3>Career Guidance</h3>
                <p>Personalized sessions to guide students in choosing the right path.</p>
              </Card>
            </Col>
            <Col xs={24} sm={12} md={8}>
              <Card hoverable>
                <h3>Alumni Success</h3>
                <p>Stories from our alumni who cracked top design & architecture colleges.</p>
              </Card>
            </Col>
            <Col xs={24} sm={12} md={8}>
              <Card hoverable>
                <h3>Scholarships</h3>
                <p>Get info on scholarships available for design/architecture aspirants.</p>
              </Card>
            </Col>
          </Row>
          <br /><br />
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <Button type="primary" size="large">LATEST NEWS &gt;&gt;</Button>
          </div>

          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12} md={6}>
              <Card hoverable cover={<UserOutlined />}>
                <h2>NEWS</h2>
              </Card>
            </Col>
            <Col xs={24} sm={12} md={6}>
              <Card hoverable cover={<BookOutlined />}>
                <h2>NEWS</h2>
              </Card>
            </Col>
            <Col xs={24} sm={12} md={6}>
              <Card hoverable cover={<StarOutlined />}>
                <h2>NEWS</h2>
              </Card>
            </Col>
            <Col xs={24} sm={12} md={6}>
              <Card hoverable cover={<StarOutlined />}>
                <h2>NEWS</h2>
              </Card>
            </Col>
          </Row>

          <br /><br />

          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <Button type="primary" size="large">BROWSE ALL NEWS &gt;&gt;</Button>
          </div>

          {/* STUDENT REVIEWS SECTION */}
          <section style={{ padding: '60px 20px', backgroundColor: '#fafafa' }}>
            <h2 style={{
              textAlign: 'center',
              fontSize: '28px',
              fontWeight: 'bold',
              color: '#002147',
              marginBottom: '10px'
            }}>
              STUDENT REVIEWS
            </h2>
            <div style={{
              width: '80px',
              height: '4px',
              backgroundColor: 'orange',
              margin: '0 auto 40px auto'
            }}></div>

            <Carousel
              dots={false}
              slidesToShow={2}
              arrows
              responsive={[
                {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 1
                  }
                }
              ]}
            >
              <div>
                <Row gutter={16} justify="center">
                  <Col xs={24} sm={12}>
                    <Card
                      hoverable
                      style={{
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                        borderRadius: '8px',
                        marginBottom: '20px'
                      }}
                    >
                      <h3>Riya Sharma</h3>
                      <p>
                        "Thanks to Borigam Coaching, I cracked NIFT with ease. Their mock tests and personal attention made the difference!"
                      </p>
                    </Card>
                  </Col>
                  <Col xs={24} sm={12}>
                    <Card
                      hoverable
                      style={{
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                        borderRadius: '8px',
                        marginBottom: '20px'
                      }}
                    >
                      <h3>Arjun Mehta</h3>
                      <p>
                        "The support from mentors and well-planned curriculum helped me clear NATA with confidence. Highly recommend!"
                      </p>
                    </Card>
                  </Col>
                </Row>
              </div>
              <div>
                <Row gutter={16} justify="center">
                  <Col xs={24} sm={12}>
                    <Card
                      hoverable
                      style={{
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                        borderRadius: '8px',
                        marginBottom: '20px'
                      }}
                    >

                    </Card>
                  </Col>
                </Row>
              </div>
            </Carousel>
          </section>
          {/* STUDENT REVIEWS SECTION */}
          <section style={{ padding: '60px 20px', backgroundColor: '#fafafa' }}>
            <h2 style={{
              textAlign: 'center',
              fontSize: '28px',
              fontWeight: 'bold',
              color: '#002147',
              marginBottom: '10px'
            }}>
              Testimonials
            </h2>
            <div style={{
              width: '80px',
              height: '4px',
              backgroundColor: 'orange',
              margin: '0 auto 40px auto'
            }}></div>

            <Carousel
              dots={false}
              slidesToShow={2}
              arrows
              responsive={[
                {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 1
                  }
                }
              ]}
            >
              <div>
                <Row gutter={16} justify="center">
                  <Col xs={24} sm={12}>
                    <Card
                      hoverable
                      style={{
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                        borderRadius: '8px',
                        marginBottom: '20px'
                      }}
                    >
                      <h3>Riya Sharma</h3>
                      <p>
                        "Thanks to Borigam Coaching, I cracked NIFT with ease. Their mock tests and personal attention made the difference!"
                      </p>
                    </Card>
                  </Col>
                  <Col xs={24} sm={12}>
                    <Card
                      hoverable
                      style={{
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                        borderRadius: '8px',
                        marginBottom: '20px'
                      }}
                    >
                      <h3>Arjun Mehta</h3>
                      <p>
                        "The support from mentors and well-planned curriculum helped me clear NATA with confidence. Highly recommend!"
                      </p>
                    </Card>
                  </Col>
                </Row>
              </div>
              <div>
                <Row gutter={16} justify="center">
                  <Col xs={24} sm={12}>
                    <Card
                      hoverable
                      style={{
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                        borderRadius: '8px',
                        marginBottom: '20px'
                      }}
                    >
                      <h3>Sneha Rao</h3>
                      <p>
                        "Great study material and weekly tests really kept me on track. I’m now studying at CEPT!"
                      </p>
                    </Card>
                  </Col>
                  <Col xs={24} sm={12}>
                    <Card
                      hoverable
                      style={{
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                        borderRadius: '8px',
                        marginBottom: '20px'
                      }}
                    >
                      <h3>Rahul Verma</h3>
                      <p>
                        "Best institute for design aspirants! The environment is encouraging and the faculty are top-notch."
                      </p>
                    </Card>
                  </Col>
                </Row>
              </div>
            </Carousel>
          </section>


          <section style={{ backgroundColor: '#f9f9f9', padding: '40px 20px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', textAlign: 'center', color: '#002147' }}>
              Top Design & Architecture Colleges
            </h2>
            <p style={{ textAlign: 'center', color: '#444', marginBottom: '30px' }}>
              Top Architecture colleges in India
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', flexWrap: 'wrap' }}>
              {/* Add logos/images of colleges here */}
            </div>
          </section>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
