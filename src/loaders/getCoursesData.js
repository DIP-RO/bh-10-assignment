
export const coursesData = async () => {
    const coursesDataLoad = await fetch('https://assignment-10-server-main-pi.vercel.app/courses')
    const allCourses = await coursesDataLoad.json()
  
    return { allCourses }
  }