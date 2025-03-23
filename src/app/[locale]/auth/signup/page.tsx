import { Metadata } from 'next'
import { SignUpForm } from '@/components/auth'
import { getTranslations } from 'next-intl/server'
import { Locale } from '@/i18n/routing'

type Params = Promise<{
  locale: Locale
  [key: string]: string | string[]
}>

interface SignUpPageProps {
  params: Params
  searchParams: {
    callbackUrl?: string
    [key: string]: string | string[] | undefined
  }
}

export async function generateMetadata({
  params,
}: SignUpPageProps): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'Auth' })

  return {
    title: t('signUp'),
    description: t('signUpDescription'),
  }
}

export default async function SignUpPage({
  params,
  searchParams: { callbackUrl = '/' },
}: SignUpPageProps) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'Auth' })

  const labels = {
    signUp: t('signUp'),
    name: t('name'),
    email: t('email'),
    password: t('password'),
    confirmPassword: t('confirmPassword'),
    hasAccount: t('hasAccount'),
    signIn: t('signIn'),
    creating: t('creating'),
    success: t('signUpSuccess'),
  }

  return (
    <div className="flex min-h-screen w-full items-center justify-center">
      <SignUpForm locale={locale} callbackUrl={callbackUrl} labels={labels} />
    </div>
  )
}
