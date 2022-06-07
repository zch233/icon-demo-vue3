// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import ExperimentOutlinedSvg from '@ant-design/icons-svg/lib/asn/ExperimentOutlined';

export interface ExperimentOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const ExperimentOutlined: ExperimentOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={ExperimentOutlinedSvg} />
    ;

ExperimentOutlined.displayName = 'ExperimentOutlined';

export default FunctionalComponent;