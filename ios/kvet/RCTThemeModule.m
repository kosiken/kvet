//
//  RCTThemeModule.m
//  kvet
//
//  Created by Kosy Allison on 20/09/2021.
//

#import "RCTThemeModule.h"
#import <UIKit/UIKit.h>
#import <React/RCTLog.h>
@implementation RCTThemeModule

RCT_EXPORT_MODULE();
RCT_EXPORT_BLOCKING_SYNCHRONOUS_METHOD(getPhoneTheme:(BOOL)lion)
//
{

//  RCTLogInfo(@"calling function %@", "getTheme");
 NSString* theme =[RCTThemeModule getTheme];
 return theme;
}


+(NSString *) getTheme {
  NSString* theme = @"none";
    if (@available(iOS 13.0, *)) {
  
    UIUserInterfaceStyle style =[[[UIScreen mainScreen] traitCollection] userInterfaceStyle];
      switch (style) {
        case UIUserInterfaceStyleUnspecified:
          theme = @"none";
          break;
        case UIUserInterfaceStyleLight:
          theme = @"light";
          break;
        case UIUserInterfaceStyleDark:
          theme = @"dark";
          break;
          
        default:
          break;
      }
  
  }
  return theme;
}



@end
