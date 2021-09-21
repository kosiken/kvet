//
//  RCTThemeModule.h
//  kvet
//
//  Created by Kosy Allison on 20/09/2021.
//

#import <UIKit/UIKit.h>
#import <React/RCTBridgeModule.h>
NS_ASSUME_NONNULL_BEGIN

@interface RCTThemeModule: NSObject<RCTBridgeModule>
+(NSString *)getTheme;
@end

NS_ASSUME_NONNULL_END
