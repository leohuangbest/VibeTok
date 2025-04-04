'use client';

import { useEffect, useState, useCallback } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { Locale } from '../../../i18n/config';
import Image from 'next/image';

/**
 * Homepage component - Always redirects to a random project
 * Uses client-side redirection to avoid NEXT_REDIRECT errors
 */
export default function IndexPage() {
  // 直接使用useParams钩子获取locale参数，而不是通过props
  const params = useParams();
  const locale = (params?.locale as string) || 'zh-cn';
  
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  
  const redirectToRandomProject = useCallback(async () => {
    try {
      const response = await fetch(`/api/projects/random`);
      
      if (response.ok) {
        const data = await response.json();
        // 使用router.push而不是redirect进行客户端重定向
        router.push(`/${locale}/project/${data.projectId}`);
      } else {
        // 如果随机项目加载失败，默认重定向到上传页面
        router.push(`/${locale}/upload`);
      }
    } catch (error) {
      console.error('Error during redirection:', error);
      // 出错时重定向到上传页面
      router.push(`/${locale}/upload`);
    }
  }, [router, locale]);
  
  useEffect(() => {
    if (isLoading) {
      redirectToRandomProject();
    }
  }, [isLoading, redirectToRandomProject]);
  
  // 显示加载界面而不是空白页
  return (
    <div className="flex items-center justify-center min-h-screen flex-col">
      <div className="mb-8">
        <Image 
          src="/favicon.png" 
          alt="CodeTok Logo" 
          width={96}
          height={96}
          className="mx-auto"
        />
      </div>
      <h1 className="text-3xl font-bold mb-4">CodeTok</h1>
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      <p className="mt-4 text-muted-foreground">
        {locale === 'zh-cn' ? '正在加载精彩内容...' : 'Loading amazing content...'}
      </p>
    </div>
  );} 
