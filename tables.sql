DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS data;

CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    username TEXT,
    name TEXT,
    password TEXT
);

CREATE TABLE IF NOT EXISTS data (
    id SERIAL PRIMARY KEY,
    CMGUnmaskedID TEXT,
    CMGUnmaskedName TEXT,
    ClientTier TEXT,
    GCPStream TEXT,
    GCPBusiness TEXT,
    CMGGlobalBU TEXT,
    CMGSegmentName TEXT,
    GlobalControlPoint TEXT,
    GCPGeography TEXT,
    GlobalRelationshipManagerName TEXT,
    REVENUE_FY14 BIGINT,
    REVENUE_FY15 BIGINT,
    Deposits_EOP_FY14 BIGINT,
    Deposits_EOP_FY15x BIGINT,
    TotalLimits_EOP_FY14 BIGINT,
    TotalLimits_EOP_FY15 BIGINT,
    TotalLimits_EOP_FY15x BIGINT,
    RWAFY15 BIGINT,
    RWAFY14 BIGINT,
    REV_RWA_FY14 DECIMAL (14,4),
    REV_RWA_FY15 DECIMAL (14,4),
    NPAT_AllocEq_FY14 BIGINT,
    NPAT_AllocEq_FY15X BIGINT,
    Company_Avg_Activity_FY14 BIGINT,
    Company_Avg_Activity_FY15 BIGINT,
    ROE_FY14 DECIMAL (14,4),
    ROE_FY15 DECIMAL (14,4)
);