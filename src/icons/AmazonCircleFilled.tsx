// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import AmazonCircleFilledSvg from '@ant-design/icons-svg/lib/asn/AmazonCircleFilled';

export interface AmazonCircleFilledIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const AmazonCircleFilled: AmazonCircleFilledIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={AmazonCircleFilledSvg} />
    ;

AmazonCircleFilled.displayName = 'AmazonCircleFilled';

export default FunctionalComponent;