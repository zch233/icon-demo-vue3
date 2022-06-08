// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import UpCircleOutlinedSvg from '@ant-design/icons-svg/lib/asn/UpCircleOutlined';

export interface UpCircleOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const UpCircleOutlined: UpCircleOutlinedIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={UpCircleOutlinedSvg} />;

UpCircleOutlined.displayName = 'UpCircleOutlined';

export default FunctionalComponent;