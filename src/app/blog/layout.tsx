const DashboardLayout = ({
	children, // will be a page or nested layout
  }: {
	children: React.ReactNode
  }) => {
	return (
	  <section>
			<div style={{background: 'orange', width: '500px', height: '700px'}}>
				{children}
			</div>
	  </section>
	)
  }

export default DashboardLayout