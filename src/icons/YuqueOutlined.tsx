// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import YuqueOutlinedSvg from '@ant-design/icons-svg/lib/asn/YuqueOutlined';

export interface YuqueOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const YuqueOutlined: YuqueOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={YuqueOutlinedSvg} />
    ;

YuqueOutlined.displayName = 'YuqueOutlined';

export default FunctionalComponent;