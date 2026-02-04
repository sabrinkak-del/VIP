import Link from "next/link"

export default function Home() {
  return (
    <div className="page">
      <div className="container">
        <header className="nav">
          <div className="logo">
            <div className="logo-badge">D</div>
            <div>
              <div className="font-bold">Ddelux</div>
              <div className="text-xs text-sand-muted">CRM נדל״ן יוקרתי</div>
            </div>
          </div>
          <nav className="nav-links">
            <Link href="/">לוח בקרה</Link>
            <Link href="/properties">נכסים</Link>
            <Link href="/clients">לקוחות</Link>
            <Link href="/finance">פיננסים</Link>
            <Link href="/tasks">משימות</Link>
          </nav>
          <Link className="cta" href="/login">כניסה ב‑SSO</Link>
        </header>

        <section className="hero">
          <div>
            <div className="uppercase tracking-[0.35em] text-xs text-sand-muted">
              Ddelux Prime Real Estate
            </div>
            <h1 className="mt-4 text-4xl font-serif">שליטה מלאה בעולם הנדל״ן היוקרתי</h1>
            <p className="text-sand-muted text-base max-w-[520px] mt-2">
              מרכז שליטה שמחבר עסקאות, נכסים ולקוחות VIP עם חוויית שירות פרטית.
              כל צוות Ddelux מסונכרן בזמן אמת — מהליד הראשון ועד חתימה.
            </p>
            <div className="mt-5 flex gap-3 flex-wrap">
              <Link className="cta cta-primary" href="/finance">ניתוח ביצועים</Link>
              <Link className="cta cta-secondary" href="/clients">צפייה בתיקי לקוחות</Link>
            </div>
          </div>

          <div>
            <div className="card">
              <div className="uppercase tracking-[0.3em] text-xs text-sand-muted">
                קצב סגירה חודשי
              </div>
              <div className="text-3xl font-bold mt-3">92%</div>
              <div className="text-sand-muted text-sm">עלייה של 14% מול חודש קודם</div>
            </div>
            <div className="kpis mt-4">
              <div className="kpi">
                <div className="uppercase tracking-[0.3em] text-xs text-sand-muted">
                  עסקאות פתוחות
                </div>
                <div className="text-2xl font-bold mt-2">48</div>
                <div className="text-emerald text-xs">+12%</div>
              </div>
              <div className="kpi">
                <div className="uppercase tracking-[0.3em] text-xs text-sand-muted">
                  נכסים בלעדיים
                </div>
                <div className="text-2xl font-bold mt-2">126</div>
                <div className="text-emerald text-xs">+8%</div>
              </div>
            </div>
          </div>
        </section>

        <section className="grid-section">
          <div className="card">
            <h2 className="text-xl font-serif">פייפליין עסקאות</h2>
            <p className="text-sand-muted text-sm">ערך כולל ₪892M</p>
            <ul className="mt-4 grid gap-3">
              <li><span className="badge">₪162M</span> איתור נכס — פנטהאוז רוטשילד</li>
              <li><span className="badge">₪214M</span> סיור מתקדם — דופלקס נווה צדק</li>
              <li><span className="badge">₪318M</span> משא ומתן — אחוזת דניה</li>
              <li><span className="badge">₪198M</span> סגירה — פנטהאוז שרונה</li>
            </ul>
          </div>
          <div className="card">
            <h2 className="text-xl font-serif">פעילות אחרונה</h2>
            <ul className="mt-4 grid gap-3">
              <li>פגישת אסטרטגיה עם משפחת ברק — היום · 10:30</li>
              <li>חתימת LOI — פנטהאוז שרונה — אתמול · 17:10</li>
              <li>סיור פרטי — וילה קיסריה — אתמול · 12:00</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  )
}
