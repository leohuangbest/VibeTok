import Link from 'next/link'

import { getSiteConfig } from '@/config/site-i18n'
import { buttonVariants } from '@/components/ui/button'
import { Icons } from '@/components/icons'
import { MainNav } from '@/components/main-nav'
import { Locale } from '../../i18n/config'
import { LanguageToggle } from './language-toggle'
import { Button } from './ui/button'
import { SideNav } from './side-nav'

interface SiteHeaderProps {
  locale: Locale
}

export function SiteHeader({ locale }: SiteHeaderProps) {
  const siteConfig = getSiteConfig(locale)

  return (
    <header className="sticky top-0 z-40 w-full border-b border-gray-800 bg-black">
      <div className="container flex h-16 items-center justify-center">
        <div className="absolute left-4">
          <SideNav />
        </div>
        <MainNav items={siteConfig.mainNav} locale={locale} />
        <div className="absolute right-4 flex items-center space-x-3">
          {/* 暂时隐藏多语言切换图标 */}
          {/* <LanguageToggle locale={locale} /> */}
          <Button
            className="bg-blue-600 hover:bg-blue-700"
            asChild
          >
            <Link href={`/${locale}/upload`}>
              {locale === 'zh-cn' ? '上传' : 'Upload'}
            </Link>
          </Button>
          <Button
            variant="outline"
            className="border-gray-600 text-black hover:bg-gray-700 hover:text-white"
            asChild
          >
            <Link href={`/${locale}/login`}>
              {locale === 'zh-cn' ? '登录/注册' : 'Login/Register'}
            </Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
