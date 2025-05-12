import React, { useState, useEffect } from 'react';
import { Button, Typography, Row, Col, Image, Modal } from 'antd';
import { LeftOutlined, RightOutlined, CloseOutlined } from '@ant-design/icons';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Header from '@/components/Header';

const { Title } = Typography;

const ExploreGallery: React.FC = () => {
  const router = useRouter();
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 1200,
    height: typeof window !== 'undefined' ? window.innerHeight : 800,
  });

  const images = Array.from({ length: 14 }, (_, i) => i + 8);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const preloadImages = () => {
      const imagePromises = images.map((img) => {
        return new Promise((resolve) => {
          const image = new window.Image();
          image.src = `/images/${img}.jpeg`;
          image.onload = resolve;
          image.onerror = resolve;
        });
      });

      Promise.all(imagePromises).then(() => {
        setIsLoading(false);
      });
    };

    preloadImages();
  }, []);

  const handleBack = () => {
    router.push('/').then(() => window.scrollTo(0, 0));
  };

  const openImageModal = (index: number) => {
    setSelectedImage(index);
    setIsModalVisible(true);
  };

  const handleNext = () => {
    if (selectedImage !== null) {
      setSelectedImage((prev) => (prev === images.length - 1 ? 0 : (prev || 0) + 1));
    }
  };

  const handlePrev = () => {
    if (selectedImage !== null) {
      setSelectedImage((prev) => (prev === 0 ? images.length - 1 : (prev || 0) - 1));
    }
  };

  const getModalImageDimensions = () => {
    const maxWidth = windowSize.width * 0.9;
    const maxHeight = windowSize.height * 0.8;
    
    return {
      width: Math.min(maxWidth, 1000),
      height: Math.min(maxHeight, 700),
    };
  };

  return (
    <>
      <Header/>
      <Head>
        <title>Explore Our Gallery</title>
        <meta name="description" content="Browse our full collection of images" />
      </Head>
      
      <div style={styles.container}>
        <div style={styles.header}>
          <Title level={1} style={styles.title}>Explore Our Gallery</Title>
          <div style={styles.underline}></div>
        </div>

        {isLoading ? (
          <div style={styles.loadingContainer}>
            <div className="loading-spinner"></div>
          </div>
        ) : (
          <Row gutter={[16, 16]} style={styles.galleryGrid}>
            {images.map((item, index) => (
              <Col 
                key={item} 
                xs={24} sm={12} md={8} lg={6}
                style={styles.galleryItem}
              >
                <div 
                  style={styles.imageContainer}
                  onClick={() => openImageModal(index)}
                  className="gallery-image-container"
                >
                  <Image
                    src={`/images/${item}.jpeg`}
                    alt={`Gallery item ${item}`}
                    style={styles.image}
                    preview={false}
                    loading="lazy"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.onerror = null;
                      target.src = '/images/default-image.jpeg';
                    }}
                  />
                  <div style={styles.imageHover}>
                    <span style={styles.imageText}>VIEW</span>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        )}

        <Button 
          type="primary" 
          style={styles.backButton} 
          onClick={handleBack}
          icon={<LeftOutlined />}
          className="back-button"
        >
          BACK TO GALLERY
        </Button>

        <Modal
          open={isModalVisible}
          onCancel={() => setIsModalVisible(false)}
          footer={null}
          closeIcon={<CloseOutlined style={styles.modalCloseIcon} />}
          width="auto"
          bodyStyle={{
            ...styles.modalBody,
            padding: '40px',
            maxWidth: '95vw',
            maxHeight: '90vh',
          }}
          centered
          style={styles.modal}
        >
          {selectedImage !== null && (
            <div style={styles.modalContent}>
              <Button 
                type="text" 
                style={styles.modalArrowLeft} 
                onClick={handlePrev}
                icon={<LeftOutlined style={styles.modalArrowIcon} />}
                className="modal-nav-button"
              />
              <div style={{
                ...styles.modalImageContainer,
                ...getModalImageDimensions(),
              }}>
                <Image
                  src={`/images/${selectedImage + 8}.jpeg`}
                  alt={`Gallery item ${selectedImage + 1}`}
                  style={{
                    ...styles.modalImage,
                    maxWidth: '100%',
                    maxHeight: '100%',
                    width: 'auto',
                    height: 'auto',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
                  }}
                  preview={false}
                />
              </div>
              <Button 
                type="text" 
                style={styles.modalArrowRight} 
                onClick={handleNext}
                icon={<RightOutlined style={styles.modalArrowIcon} />}
                className="modal-nav-button"
              />
              <div style={styles.imageCounter}>
                {selectedImage + 1} / {images.length}
              </div>
            </div>
          )}
        </Modal>

        <style jsx global>{`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }

          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }

          .loading-spinner {
            border: 5px solid #f3f3f3;
            border-top: 5px solid #0a2c64;
            border-radius: 50%;
            width: 50px;
            height: 50px;
            animation: spin 1s linear infinite;
            margin: 0 auto;
          }

          .gallery-image-container {
            transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
            border-radius: 12px;
            overflow: hidden;
          }

          .gallery-image-container:hover {
            transform: translateY(-5px);
            box-shadow: 0 15px 30px rgba(0,0,0,0.15);
          }

          .gallery-image-container:hover .ant-image-img {
            transform: scale(1.03);
          }

          .gallery-image-container:hover .imageHover {
            opacity: 1;
          }

          .gallery-image-container:hover .imageText {
            transform: translateY(0);
          }

          .back-button {
            transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
          }

          .back-button:hover {
            transform: translateY(-3px);
            box-shadow: 0 10px 20px rgba(10, 44, 100, 0.3);
          }

          .modal-nav-button {
            transition: all 0.3s ease;
          }

          .modal-nav-button:hover {
            background: rgba(10, 44, 100, 0.1);
          }

          .ant-modal-content {
            border-radius: 16px !important;
            overflow: hidden;
          }

          @media (max-width: 768px) {
            .ant-col {
              padding: 8px !important;
            }
            
            .gallery-image-container {
              height: 200px !important;
            }
            
            .modal-nav-button {
              width: 40px !important;
              height: 40px !important;
            }
            
            .modal-arrow-icon {
              font-size: 24px !important;
            }

            .ant-modal-body {
              padding: 20px !important;
            }
          }
        `}</style>
      </div>
    </>
  );
};

const styles = {
  container: {
    marginTop: '110px',
    padding: '40px 20px',
    backgroundColor: '#f9f9f9',
    minHeight: '100vh',
  },
  header: {
    textAlign: 'center' as const,
    marginBottom: '40px',
    animation: 'fadeIn 0.6s ease-out',
  },
  title: {
    color: '#0a2c64',
    fontWeight: 700 as const,
    fontSize: 'clamp(28px, 5vw, 42px)',
    marginBottom: '10px',
    letterSpacing: '1px',
  },
  underline: {
    height: '4px',
    width: '80px',
    background: 'linear-gradient(90deg, #fbb034, #ffdd59)',
    margin: '0 auto',
    borderRadius: '3px',
  },
  loadingContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '50vh',
  },
  galleryGrid: {
    maxWidth: '1400px',
    margin: '0 auto',
    animation: 'fadeIn 0.6s ease-out',
  },
  galleryItem: {
    display: 'flex',
    justifyContent: 'center',
    animation: 'fadeIn 0.6s ease-out',
    padding: '8px',
  },
  imageContainer: {
    position: 'relative' as const,
    borderRadius: '12px',
    overflow: 'hidden',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    height: '250px',
    width: '100%',
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover' as const,
    display: 'block',
    transition: 'transform 0.4s ease',
  },
  imageHover: {
    position: 'absolute' as const,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(10, 44, 100, 0.7)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0,
    transition: 'opacity 0.3s ease',
  },
  imageText: {
    color: 'white',
    fontSize: '18px',
    fontWeight: 600 as const,
    letterSpacing: '1px',
    textTransform: 'uppercase' as const,
    transform: 'translateY(20px)',
    transition: 'transform 0.3s ease',
  },
  backButton: {
    display: 'block',
    margin: '40px auto 0',
    backgroundColor: '#0a2c64',
    borderColor: '#0a2c64',
    padding: '0 30px',
    height: '45px',
    fontSize: '16px',
    fontWeight: 600 as const,
    borderRadius: '25px',
    boxShadow: '0 5px 15px rgba(10, 44, 100, 0.2)',
  },
  modal: {
    maxWidth: '100vw',
  },
  modalBody: {
    padding: 0,
    backgroundColor: '#ffffff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContent: {
    position: 'relative' as const,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  modalImageContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto',
    backgroundColor: '#fff',
    borderRadius: '12px',
    padding: '10px',
  },
  modalImage: {
    borderRadius: '8px',
    objectFit: 'contain' as const,
  },
  modalArrowLeft: {
    position: 'absolute' as const,
    left: '10px',
    top: '50%',
    transform: 'translateY(-50%)',
    zIndex: 1,
    color: '#0a2c64',
    fontSize: '24px',
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.3s ease',
    backgroundColor: 'rgba(255,255,255,0.9)',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
  },
  modalArrowRight: {
    position: 'absolute' as const,
    right: '10px',
    top: '50%',
    transform: 'translateY(-50%)',
    zIndex: 1,
    color: '#0a2c64',
    fontSize: '24px',
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.3s ease',
    backgroundColor: 'rgba(255,255,255,0.9)',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
  },
  modalArrowIcon: {
    fontSize: '24px',
  },
  modalCloseIcon: {
    color: '#0a2c64',
    fontSize: '20px',
    background: 'rgba(255,255,255,0.9)',
    borderRadius: '50%',
    padding: '6px',
    transition: 'all 0.3s ease',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
  },
  imageCounter: {
    position: 'absolute' as const,
    bottom: '20px',
    left: '50%',
    transform: 'translateX(-50%)',
    background: 'rgba(10, 44, 100, 0.9)',
    color: 'white',
    padding: '8px 20px',
    borderRadius: '25px',
    fontSize: '14px',
    fontWeight: 500 as const,
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
  },
};

export default ExploreGallery;