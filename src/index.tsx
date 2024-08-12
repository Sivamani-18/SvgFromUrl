import React, { useEffect, useState } from 'react';

interface SvgFromUrlProps {
  url: string;
  onStatus: (status: 'success' | 'error') => void;
}

const checkSvgUrl = async (url: string): Promise<boolean> => {
  try {
    const response = await fetch(url, { method: 'HEAD' });
    const contentType = response.headers.get('Content-Type');
    return contentType === 'image/svg+xml';
  } catch (error) {
    console.error('Error checking SVG URL:', error);
    return false;
  }
};

const SvgFromUrl: React.FC<SvgFromUrlProps> = ({ url, onStatus }) => {
  const [svgContent, setSvgContent] = useState<string>('');

  useEffect(() => {
    const fetchSvg = async () => {
      try {
        const isSvg = await checkSvgUrl(url);
        if (!isSvg) {
          console.error('The URL does not point to a valid SVG file.');
          onStatus('error');
          return;
        }

        const response = await fetch(url);
        if (!response.ok) {
          console.error(`HTTP error! status: ${response.status}`);
          onStatus('error');
          return;
        }

        const svgText = await response.text();
        setSvgContent(svgText);
        onStatus('success');
      } catch (error) {
        console.error('Error fetching SVG:', error);
        onStatus('error');
      }
    };

    fetchSvg();
  }, [url, onStatus]);

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <div
        className='svg_block'
        dangerouslySetInnerHTML={{ __html: svgContent }}
      />
    </div>
  );
};

export default SvgFromUrl;
