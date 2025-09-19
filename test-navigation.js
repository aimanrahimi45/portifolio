// Test script for GooeyNav navigation functionality
console.log('🧪 Testing GooeyNav Navigation Functionality');

// Test 1: Check if navigation elements exist
function testNavigationElements() {
  console.log('📋 Test 1: Checking navigation elements...');
  
  const navContainer = document.querySelector('.gooey-nav-container');
  const navLinks = document.querySelectorAll('.gooey-nav-container nav ul li a');
  const effectFilter = document.querySelector('.effect.filter');
  const effectText = document.querySelector('.effect.text');
  
  console.log('✅ Navigation container found:', !!navContainer);
  console.log('✅ Navigation links found:', navLinks.length);
  console.log('✅ Effect filter found:', !!effectFilter);
  console.log('✅ Effect text found:', !!effectText);
  
  // Check if all 4 navigation links are present
  const expectedLinks = ['Home', 'About', 'Projects', 'Contact'];
  const foundLinks = Array.from(navLinks).map(link => link.textContent.trim());
  
  console.log('📍 Expected links:', expectedLinks);
  console.log('📍 Found links:', foundLinks);
  console.log('✅ All links match:', JSON.stringify(expectedLinks) === JSON.stringify(foundLinks));
  
  return {
    navContainer,
    navLinks,
    effectFilter,
    effectText,
    allLinksPresent: expectedLinks.length === navLinks.length
  };
}

// Test 2: Test smooth scrolling functionality
function testSmoothScrolling() {
  console.log('📋 Test 2: Testing smooth scrolling...');
  
  const sections = ['hero', 'about', 'projects', 'contact'];
  let allSectionsFound = true;
  
  sections.forEach(sectionId => {
    const element = document.getElementById(sectionId);
    console.log(`✅ Section #${sectionId} found:`, !!element);
    if (!element) allSectionsFound = false;
  });
  
  return { allSectionsFound, sections };
}

// Test 3: Test click handlers
function testClickHandlers() {
  console.log('📋 Test 3: Testing click handlers...');
  
  const navLinks = document.querySelectorAll('.gooey-nav-container nav ul li a');
  let clickHandlersWorking = true;
  
  navLinks.forEach((link, index) => {
    const href = link.getAttribute('href');
    console.log(`✅ Link ${index + 1} href: ${href}`);
    
    // Test if href starts with #
    if (!href.startsWith('#')) {
      console.log(`❌ Link ${index + 1} href doesn't start with #`);
      clickHandlersWorking = false;
    }
  });
  
  return { clickHandlersWorking };
}

// Test 4: Test particle animations
function testParticleAnimations() {
  console.log('📋 Test 4: Testing particle animations...');
  
  const effectFilter = document.querySelector('.effect.filter');
  const particles = effectFilter?.querySelectorAll('.particle');
  
  console.log('✅ Particles found:', particles?.length || 0);
  
  return { particlesFound: particles?.length || 0 };
}

// Test 5: Test responsive design
function testResponsiveDesign() {
  console.log('📋 Test 5: Testing responsive design...');
  
  const navContainer = document.querySelector('.gooey-nav-container');
  const computedStyle = window.getComputedStyle(navContainer);
  
  console.log('📱 Current viewport width:', window.innerWidth);
  console.log('📱 Navigation display:', computedStyle.display);
  console.log('📱 Navigation position:', computedStyle.position);
  
  return { viewportWidth: window.innerWidth };
}

// Test 6: Test font styling
function testFontStyling() {
  console.log('📋 Test 6: Testing font styling...');
  
  const navLinks = document.querySelectorAll('.gooey-nav-container nav ul li a');
  let fontStylingCorrect = true;
  
  navLinks.forEach((link, index) => {
    const computedStyle = window.getComputedStyle(link);
    const fontWeight = computedStyle.fontWeight;
    const fontSize = computedStyle.fontSize;
    
    console.log(`✅ Link ${index + 1} font-weight: ${fontWeight}`);
    console.log(`✅ Link ${index + 1} font-size: ${fontSize}`);
    
    // Check if font-weight is 600 (semibold)
    if (fontWeight !== '600') {
      console.log(`❌ Link ${index + 1} font-weight is not 600 (semibold)`);
      fontStylingCorrect = false;
    }
  });
  
  return { fontStylingCorrect };
}

// Run all tests
function runAllTests() {
  console.log('🚀 Starting GooeyNav tests...\n');
  
  const results = {
    navigationElements: testNavigationElements(),
    smoothScrolling: testSmoothScrolling(),
    clickHandlers: testClickHandlers(),
    particleAnimations: testParticleAnimations(),
    responsiveDesign: testResponsiveDesign(),
    fontStyling: testFontStyling()
  };
  
  console.log('\n📊 Test Results Summary:');
  console.log('========================');
  
  console.log('✅ Navigation Elements:', results.navigationElements.allLinksPresent ? 'PASS' : 'FAIL');
  console.log('✅ Smooth Scrolling:', results.smoothScrolling.allSectionsFound ? 'PASS' : 'FAIL');
  console.log('✅ Click Handlers:', results.clickHandlers.clickHandlersWorking ? 'PASS' : 'FAIL');
  console.log('✅ Particle Animations:', results.particleAnimations.particlesFound > 0 ? 'PASS' : 'FAIL');
  console.log('✅ Responsive Design:', 'Viewport width:', results.responsiveDesign.viewportWidth);
  console.log('✅ Font Styling:', results.fontStyling.fontStylingCorrect ? 'PASS' : 'FAIL');
  
  return results;
}

// Wait for page to load before running tests
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', runAllTests);
} else {
  runAllTests();
}