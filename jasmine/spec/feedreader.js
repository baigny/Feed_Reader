

/* feedreader.js
 
 * This is the spec file that Jasmine will read and contains
  all of the tests that will be run against your application.
 */
 /*    We're placing all of our tests within the $() function, 
       since some of these tests may require DOM elements. We want
      to ensure they don't run until the DOM is ready.
 */

$(function() {
    //RSS feeds Test Suite
    describe('RSS Feeds', function() {
        
        // Test to ensure allFeeds are defined        
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });
        
        //Test to ensures it has URL defined and it's not empty

        it('URL Defined', function(){
            for(let feed of allFeeds) {
                expect(feed.url).not.toBe(undefined);
                expect(feed.url).not.toBe('');
            }
        });
        

        //Test to ensures URL is defined and has a name
        it ('URL defined and named', function(){
            for(let feed of allFeeds){
                expect(feed.name).not.toBe(undefined);
                expect(feed.name).not.toBe('');
            }
        })
    });


    //The menu Test Suite
    describe('The Menu', function(){
        // test to ensure the menu element is hidden by default
        it('If menu is hidden by Default', function(){
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
        //test to ensures the menu changes visibility when the menu icon is clicked
        it('changes visibility when menu icon is clicked',function(){
            let menuImg = $('.menu-icon-link');
            let leftMenu = $('slide-menu');
            menuImg.click();
            expect($('body').hasClass('menu-hidden')).toBe(false);
            menuImg.click();
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
    });


    // Initial Entries Test Suite

    describe('Initial Entries', function() {
        
        /* Test to ensure when the loadFeed function is called and completes its work, 
           there is at least a single .entry element within the .feed container.
         */ 
         beforeEach(function(done){
            loadFeed(0,done);
         });
    

        it('feed list has minimum one entry', function() {
             let feedList = $('.feed .entry-link');
           
            expect(feedList.length).not.toBe(0);
        });
    });

//New Feed Selection 


 describe('New Feed Selection', function() {
       
         let feedContent;

         beforeEach(function(done) {
            loadFeed(0, function() {
                feedContent = $('.feed').html();
                console.log($('.feed').html());
                done();
            });
         });
        // after feed loaded, content changes
         it('content changes upon a new feed load', function(done) {
            loadFeed(1, function() {
                let feedContent2 = $('.feed').html();
                expect(feedContent).not.toEqual(feedContent2);
                console.log($('.feed').html());
                done();
            });
         });
     });
   

    
}()); 
