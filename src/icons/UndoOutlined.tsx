// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import UndoOutlinedSvg from '@ant-design/icons-svg/lib/asn/UndoOutlined';

export interface UndoOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const UndoOutlined: UndoOutlinedIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={UndoOutlinedSvg} />;

UndoOutlined.displayName = 'UndoOutlined';

export default FunctionalComponent;