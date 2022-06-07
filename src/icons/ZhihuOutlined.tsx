// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import ZhihuOutlinedSvg from '@ant-design/icons-svg/lib/asn/ZhihuOutlined';

export interface ZhihuOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const ZhihuOutlined: ZhihuOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={ZhihuOutlinedSvg} />
    ;

ZhihuOutlined.displayName = 'ZhihuOutlined';

export default FunctionalComponent;