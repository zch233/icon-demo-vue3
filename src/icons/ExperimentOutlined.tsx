// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import ExperimentOutlinedSvg from '@ant-design/icons-svg/lib/asn/ExperimentOutlined';

export interface ExperimentOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const ExperimentOutlined: ExperimentOutlinedIconType = (props, context) => <Icon name='ExperimentOutlined' {...{ ...props, ...context.attrs }} icon={ExperimentOutlinedSvg} />;

ExperimentOutlined.displayName = 'ExperimentOutlined';

export default ExperimentOutlined;