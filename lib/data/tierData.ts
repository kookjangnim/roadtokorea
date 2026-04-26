/**
 * 티어별 데이터 저장
 * 각 티어별(서울, 부산, 제주, 경주, 강릉)별 도시의 통계와 데이터를 관리합니다.
 */

// 티어별 카테고리
export interface TierData {
  [key: string]: {
    name: string;
    total_cities: number;
    avg_attractions: number;
    total_attractions: number;
    annual_visitors: string;
    satisfaction_rate: string;
  };
}

// 티어별 데이터
export const tierData: TierData = {
  tier1: {
    name: '서울',
    total_cities: 4,
    avg_attractions: 8,
    total_attractions: 8,
    annual_visitors: '50,000+',
    satisfaction_rate: '94%'
  },
  tier2: {
    name: '부산',
    total_cities: 6,
    avg_attractions: 8,
    total_attractions: 8,
    annual_visitors: '300,000+',
    satisfaction_rate: '91%'
  },
  tier3: {
    name: '순천',
    total_cities: 8,
    avg_attractions: 8,
    total_attractions: 8,
    annual_visitors: '100,000+',
    satisfaction_rate: '89%'
  },
  tier4: {
    name: '강릉',
    total_cities: 8,
    avg_attractions: 8,
    total_attractions: 8,
    annual_visitors: '80,000+',
    satisfaction_rate: '87%'
  }
};

// 티어별 통계 (get 함수)
export function getTierStats(tier: string): TierData[string] | null {
  const tierMap = {
    tier1: tierData.tier1,
    tier2: tierData.tier2,
    tier3: tierData.tier3,
    tier4: tierData.tier4
  };

  return tierMap[tier as keyof typeof tierMap] || null;
}

// 티어별 총 개수 (get 함수)
export function getTotalCities(): number {
  return (
    (tierData.tier1?.total_cities || 0) +
    (tierData.tier2?.total_cities || 0) +
    (tierData.tier3?.total_cities || 0) +
    (tierData.tier4?.total_cities || 0)
  );
}

export function getTotalAttractions(): number {
  return (
    (tierData.tier1?.total_attractions || 0) +
    (tierData.tier2?.total_attractions || 0) +
    (tierData.tier3?.total_attractions || 0) +
    (tierData.tier4?.total_attractions || 0)
  );
}

export function getTotalVisitors(): number {
  const t1 = parseInt(tierData.tier1?.annual_visitors?.replace(/[^0-9]/g, '') || '0', 10);
  const t2 = parseInt(tierData.tier2?.annual_visitors?.replace(/[^0-9]/g, '') || '0', 10);
  const t3 = parseInt(tierData.tier3?.annual_visitors?.replace(/[^0-9]/g, '') || '0', 10);
  const t4 = parseInt(tierData.tier4?.annual_visitors?.replace(/[^0-9]/g, '') || '0', 10);

  return t1 + t2 + t3 + t4;
}

export function getSatisfactionRate(tier: string): string | null {
  const tierMap = {
    tier1: tierData.tier1?.satisfaction_rate || '0',
    tier2: tierData.tier2?.satisfaction_rate || '0',
    tier3: tierData.tier3?.satisfaction_rate || '0',
    tier4: tierData.tier4?.satisfaction_rate || '0'
  };

  return tierMap[tier as keyof typeof tierMap] || null;
}
