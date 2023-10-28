const DashboardLayout = ({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) => {
    return (
      <section>
        <nav>
          <ul style={{display: 'flex'}}>
            <li style={{marginRight: '5px'}}>대쉬보드</li>
            <li style={{marginRight: '5px'}}>친구찾기</li>
            <li>설정</li>
          </ul>
        </nav>   
        {children}
      </section>
    )
  }

export default DashboardLayout