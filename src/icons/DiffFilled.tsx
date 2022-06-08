// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import DiffFilledSvg from '@ant-design/icons-svg/lib/asn/DiffFilled';

export interface DiffFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const DiffFilled: DiffFilledIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={DiffFilledSvg} />;

DiffFilled.displayName = 'DiffFilled';

export default DiffFilled;