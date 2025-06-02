import React, { useState, useEffect } from "react";
import { Typography, Button, Row, Col, Image, Card, Modal } from "antd";
import { PlayCircleFilled, CloseOutlined } from "@ant-design/icons";
import Head from "next/head";
import Link from "next/link";
import { type } from "os";

const { Title, Paragraph } = Typography;

type MediaType = 'image' | 'video';
type MediaSection = 'studentWorks' | 'studentSituation' | 'lifeAtBorigam';

interface MediaItem {
  id: number;
  type: MediaType;
  section: MediaSection;
  prefix: string;
}

const ExploreGallery = () => {
  const [activeSection, setActiveSection] = useState<MediaSection>('studentWorks');
  const [previewVisible, setPreviewVisible] = useState(false);
  const [previewMedia, setPreviewMedia] = useState("");
  const [isVideo, setIsVideo] = useState(false);

  // Media data configuration
  const mediaData: MediaItem[] = [
    // Student Works (8–13)
    ...Array.from({ length: 6 }, (_, i) => ({
      id: i + 8,
      type: 'image' as MediaType,
      section: 'studentWorks' as MediaSection,
      prefix: ''
    })),
    // Student Situation (1–34), excluding 2 and 4
        ...Array.from({ length: 34 }, (_, i) => ({
        id: i + 1,
        type: 'image' as MediaType,
        section: 'studentSituation' as MediaSection,
        prefix: 'ss'
      })),
    // Life at Borigam (1–29)
    ...Array.from({ length: 29 }, (_, i) => {
      const id = i + 1;
      // IDs to force as images even if previously marked as videos:
      const forceImageIds = [2, 4, 7, 8, 10, 12, 19];
      let type: MediaType;
      if (forceImageIds.includes(id)) {
        type = 'image';
      } else {
        type = (id === 6 || (id >= 9 && id <= 14) || id === 16 || id === 18 || id >= 20) ? 'video' : 'image';
      }
      return {
        id,
        type,
        section: 'lifeAtBorigam' as MediaSection,
        prefix: 'lob'
      };
    }),
  ];

  const handleMediaClick = (item: MediaItem) => {
    setPreviewMedia(`/images/${item.prefix}${item.id}.${item.type === 'video' ? 'mp4' : 'jpeg'}`);
    setIsVideo(item.type === 'video');
    setPreviewVisible(true);
  };

  const filteredMedia = (section: MediaSection) =>
    mediaData.filter(item => item.section === section);

  const scrollToSection = (sectionId: MediaSection) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(sectionId);
    }
  };

  useEffect(() => {
    const hash = window.location.hash.substring(1) as MediaSection;
    if (hash && ['studentWorks', 'studentSituation', 'lifeAtBorigam'].includes(hash)) {
      scrollToSection(hash);
    }
  }, []);

  return (
    <>
      <Head>
        <title>Explore Gallery | Borigam</title>
        <meta name="description" content="Explore our student works, situation tests, and life at Borigam" />
      </Head>

      <div style={{
        padding: '80px 20px',
        maxWidth: 1400,
        margin: '0 auto',
        position: 'relative'
      }}>
        <Title level={1} style={{
          textAlign: 'center',
          marginBottom: '40px',
          color: '#0a2c64'
        }}>
          Our Gallery
          <div style={{
            height: '4px',
            width: '80px',
            background: '#fbb034',
            margin: '20px auto 0',
            borderRadius: '2px'
          }} />
        </Title>

        <div style={{
          position: 'sticky',
          top: '80px',
          zIndex: 100,
          background: '#fff',
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          marginBottom: '40px'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '20px',
            flexWrap: 'wrap' as const
          }}>
            <Button
              type={activeSection === 'studentWorks' ? 'primary' : 'default'}
              onClick={() => scrollToSection('studentWorks')}
              style={{
                background: activeSection === 'studentWorks' ? '#0a2c64' : '#f0f0f0',
                color: activeSection === 'studentWorks' ? '#fff' : '#333',
                border: 'none',
                borderRadius: '20px',
                padding: '0 24px',
                height: '40px',
                fontWeight: 600
              }}
            >
              Student Works
            </Button>
            <Button
              type={activeSection === 'studentSituation' ? 'primary' : 'default'}
              onClick={() => scrollToSection('studentSituation')}
              style={{
                background: activeSection === 'studentSituation' ? '#0a2c64' : '#f0f0f0',
                color: activeSection === 'studentSituation' ? '#fff' : '#333',
                border: 'none',
                borderRadius: '20px',
                padding: '0 24px',
                height: '40px',
                fontWeight: 600
              }}
            >
              Student Situation
            </Button>
            <Button
              type={activeSection === 'lifeAtBorigam' ? 'primary' : 'default'}
              onClick={() => scrollToSection('lifeAtBorigam')}
              style={{
                background: activeSection === 'lifeAtBorigam' ? '#0a2c64' : '#f0f0f0',
                color: activeSection === 'lifeAtBorigam' ? '#fff' : '#333',
                border: 'none',
                borderRadius: '20px',
                padding: '0 24px',
                height: '40px',
                fontWeight: 600
              }}
            >
              Life at Borigam
            </Button>
          </div>
        </div>

        {/* Student Works Section */}
        <section id="studentWorks" style={{ marginBottom: '80px' }}>
          <Title level={2} style={{
            color: '#0a2c64',
            marginBottom: '30px',
            paddingBottom: '10px',
            borderBottom: '2px solid #fbb034',
            display: 'inline-block'
          }}>
            Student Works
          </Title>

          <Row gutter={[24, 24]}>
            {filteredMedia('studentWorks').map((item) => (
              <Col key={item.id} xs={24} sm={12} md={8} lg={6} xl={4}>
                <Card
                  hoverable
                  style={{ borderRadius: '12px', overflow: 'hidden' }}
                  cover={
                    <div style={{ position: 'relative', height: '250px', overflow: 'hidden' }}>
                      <Image
                        src={`/images/${item.id}.jpeg`}
                        alt={`Student Work ${item.id}`}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        preview={false}
                        fallback="/images/default-image.jpeg"
                        onClick={() => handleMediaClick(item)}
                      />
                    </div>
                  }
                >
                  <Paragraph strong style={{ textAlign: 'center', marginBottom: 0 }}>
                    Student Work #{item.id}
                  </Paragraph>
                </Card>
              </Col>
            ))}
          </Row>
        </section>

        {/* Student Situation Section */}
        <section id="studentSituation" style={{ marginBottom: '80px' }}>
          <Title level={2} style={{
            color: '#0a2c64',
            marginBottom: '30px',
            paddingBottom: '10px',
            borderBottom: '2px solid #fbb034',
            display: 'inline-block'
          }}>
            Student Situation Tests
          </Title>

          <Row gutter={[24, 24]}>
            {filteredMedia('studentSituation').map((item) => (
              <Col key={item.id} xs={24} sm={12} md={8} lg={6} xl={4}>
                <Card
                  hoverable
                  style={{ borderRadius: '12px', overflow: 'hidden' }}
                  cover={
                    <div style={{ position: 'relative', height: '250px', overflow: 'hidden' }}>
                      {item.type === 'image' ? (
                        <Image
                          src={`/images/ss${item.id}.jpeg`}
                          alt={`Situation Test ${item.id}`}
                          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                          preview={false}
                          fallback="/images/default-image.jpeg"
                          onClick={() => handleMediaClick(item)}
                        />
                      ) : (
                        <>
                          <video
                            muted
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            src={`/images/ss${item.id}.mp4`}
                            onClick={() => handleMediaClick(item)}
                          />
                          <PlayCircleFilled style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            fontSize: '48px',
                            color: 'rgba(255,255,255,0.9)'
                          }} />
                        </>
                      )}
                    </div>
                  }
                >
                  <Paragraph strong style={{ textAlign: 'center', marginBottom: 0 }}>
                    Situation Test #{item.id}
                  </Paragraph>
                </Card>
              </Col>
            ))}
          </Row>
        </section>

        {/* Life at Borigam Section */}
        <section id="lifeAtBorigam" style={{ marginBottom: '80px' }}>
          <Title level={2} style={{
            color: '#0a2c64',
            marginBottom: '30px',
            paddingBottom: '10px',
            borderBottom: '2px solid #fbb034',
            display: 'inline-block'
          }}>
            Life at Borigam
          </Title>

          <Row gutter={[24, 24]}>
            {filteredMedia('lifeAtBorigam').map((item) => (
              <Col key={item.id} xs={24} sm={12} md={8} lg={6} xl={4}>
                <Card
                  hoverable
                  style={{ borderRadius: '12px', overflow: 'hidden' }}
                  cover={
                    <div style={{ position: 'relative', height: '250px', overflow: 'hidden' }}>
                      {item.type === 'image' ? (
                        <Image
                          src={`/images/lob${item.id}.jpeg`}
                          alt={`Life at Borigam ${item.id}`}
                          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                          preview={false}
                          fallback="/images/default-image.jpeg"
                          onClick={() => handleMediaClick(item)}
                        />
                      ) : (
                        <>
                          <video
                            muted
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            src={`/images/lob${item.id}.mp4`}
                            onClick={() => handleMediaClick(item)}
                          />
                          <PlayCircleFilled style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            fontSize: '48px',
                            color: 'rgba(255,255,255,0.9)'
                          }} />
                        </>
                      )}
                    </div>
                  }
                >
                  <Paragraph strong style={{ textAlign: 'center', marginBottom: 0 }}>
                    Life at Borigam #{item.id}
                  </Paragraph>
                </Card>
              </Col>
            ))}
          </Row>
        </section>

        {/* Back to Top Button */}
        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <Link href="/" passHref>
            <Button
              type="primary"
              style={{
                background: '#0a2c64',
                border: 'none',
                borderRadius: '20px',
                padding: '0 24px',
                height: '40px',
                fontWeight: 600,
                marginRight: '16px'
              }}
            >
              Back to Home
            </Button>
          </Link>
          <Button
            type="primary"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            style={{
              background: '#fbb034',
              border: 'none',
              borderRadius: '20px',
              padding: '0 24px',
              height: '40px',
              fontWeight: 600
            }}
          >
            Back to Top
          </Button>
        </div>

        {/* Media Preview Modal */}
        <Modal
          open={previewVisible}
          footer={null}
          onCancel={() => setPreviewVisible(false)}
          width={isVideo ? 800 : 600}
          centered
          destroyOnClose
          closeIcon={
            <div style={{
              background: 'rgba(0,0,0,0.5)',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <CloseOutlined style={{ color: '#fff', fontSize: '24px' }} />
            </div>
          }
          bodyStyle={{ padding: 0 }}
        >
          {isVideo ? (
            <video
              controls
              autoPlay
              style={{ width: '100%', outline: 'none' }}
              src={previewMedia}
            />
          ) : (
            <img
              alt="Preview"
              style={{ width: '100%', maxHeight: '80vh', objectFit: 'contain' }}
              src={previewMedia}
            />
          )}
        </Modal>
      </div>
    </>
  );
};

export default ExploreGallery;
