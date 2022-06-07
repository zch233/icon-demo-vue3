// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import AmazonOutlinedSvg from '@ant-design/icons-svg/lib/asn/AmazonOutlined';

export interface AmazonOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const AmazonOutlined: AmazonOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={AmazonOutlinedSvg} />
    ;

AmazonOutlined.displayName = 'AmazonOutlined';

export default FunctionalComponent;