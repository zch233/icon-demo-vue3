// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import WeiboOutlinedSvg from '@ant-design/icons-svg/lib/asn/WeiboOutlined';

export interface WeiboOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const WeiboOutlined: WeiboOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={WeiboOutlinedSvg} />
    ;

WeiboOutlined.displayName = 'WeiboOutlined';

export default FunctionalComponent;