// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import AlibabaOutlinedSvg from '@ant-design/icons-svg/lib/asn/AlibabaOutlined';

export interface AlibabaOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const AlibabaOutlined: AlibabaOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={AlibabaOutlinedSvg} />
    ;

AlibabaOutlined.displayName = 'AlibabaOutlined';

export default FunctionalComponent;