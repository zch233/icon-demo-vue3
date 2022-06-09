// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import ExperimentFilledSvg from '@ant-design/icons-svg/lib/asn/ExperimentFilled';

export interface ExperimentFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const ExperimentFilled: ExperimentFilledIconType = (props, context) => <Icon name='ExperimentFilled' {...{ ...props, ...context.attrs }} icon={ExperimentFilledSvg} />;

ExperimentFilled.displayName = 'ExperimentFilled';

export default ExperimentFilled;