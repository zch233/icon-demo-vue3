// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import OneToOneOutlinedSvg from '@ant-design/icons-svg/lib/asn/OneToOneOutlined';

export interface OneToOneOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const OneToOneOutlined: OneToOneOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={OneToOneOutlinedSvg} />
    ;

OneToOneOutlined.displayName = 'OneToOneOutlined';

export default FunctionalComponent;