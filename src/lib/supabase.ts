import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

// Vercel 빌드 시(Prerendering) 환경 변수가 없으면 에러가 발생하여 빌드가 중단됩니다.
// 이를 방지하기 위해 값이 있을 때만 클라이언트를 생성하거나, 더미 값을 방어용으로 넣습니다.
if (!supabaseUrl || !supabaseAnonKey) {
    console.warn('⚠️ Supabase environment variables are missing! Check Vercel Project Settings > Environment Variables.');
}

// createClient는 URL이 비어있으면 에러를 던지므로, 최소한의 형식은 유지하거나 조건부로 생성해야 합니다.
export const supabase = createClient(
    supabaseUrl || 'https://placeholder-url.supabase.co',
    supabaseAnonKey || 'placeholder-key'
);
