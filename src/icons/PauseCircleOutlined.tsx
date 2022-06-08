// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import PauseCircleOutlinedSvg from '@ant-design/icons-svg/lib/asn/PauseCircleOutlined';

export interface PauseCircleOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const PauseCircleOutlined: PauseCircleOutlinedIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={PauseCircleOutlinedSvg} />;

PauseCircleOutlined.displayName = 'PauseCircleOutlined';

export default FunctionalComponent;