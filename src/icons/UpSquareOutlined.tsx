// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import UpSquareOutlinedSvg from '@ant-design/icons-svg/lib/asn/UpSquareOutlined';

export interface UpSquareOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const UpSquareOutlined: UpSquareOutlinedIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={UpSquareOutlinedSvg} />;

UpSquareOutlined.displayName = 'UpSquareOutlined';

export default FunctionalComponent;